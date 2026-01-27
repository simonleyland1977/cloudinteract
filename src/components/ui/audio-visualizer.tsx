"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface AudioVisualizerProps {
    isListening: boolean
    onStop: () => void
}

export function AudioVisualizer({ isListening, onStop }: AudioVisualizerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [error, setError] = useState<string | null>(null)
    const audioContextRef = useRef<AudioContext | null>(null)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null)
    const rafRef = useRef<number | null>(null)

    const draw = useRef<(() => void) | null>(null)

    const cleanup = useRef(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        sourceRef.current?.disconnect()
        analyserRef.current?.disconnect()
        audioContextRef.current?.close()

        // Reset canvas
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext("2d")
            ctx?.clearRect(0, 0, canvas.width, canvas.height)
        }
    }).current

    const startListening = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

            const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
            const audioContext = new AudioContextClass()

            const analyser = audioContext.createAnalyser()
            const source = audioContext.createMediaStreamSource(stream)

            analyser.fftSize = 256
            source.connect(analyser)

            audioContextRef.current = audioContext
            analyserRef.current = analyser
            sourceRef.current = source

            if (draw.current) draw.current()
        } catch (err) {
            console.error("Error accessing microphone:", err)
            setError("Microphone access denied. Please allow permissions.")
        }
    }

    draw.current = () => {
        const canvas = canvasRef.current
        const analyser = analyserRef.current
        if (!canvas || !analyser) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size to match display size for high DPI
        const dpr = window.devicePixelRatio || 1
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        ctx.scale(dpr, dpr)

        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const render = () => {
            analyser.getByteFrequencyData(dataArray)
            ctx.clearRect(0, 0, rect.width, rect.height)

            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const radius = Math.min(rect.width, rect.height) / 3

            // Draw glowing orb base
            const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius * 1.5)
            gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)") // Indigo
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, rect.width, rect.height)

            // Draw circular waveform
            ctx.beginPath()
            ctx.strokeStyle = "rgba(6, 182, 212, 0.8)" // Cyan
            ctx.lineWidth = 2
            ctx.lineCap = "round"

            for (let i = 0; i < bufferLength; i++) {
                const rad = (i * Math.PI * 2) / bufferLength
                const v = dataArray[i] / 128.0
                const barHeight = v * 50

                // Create circle shape modified by frequency
                const r = radius + barHeight
                const x = centerX + Math.cos(rad) * r
                const y = centerY + Math.sin(rad) * r

                if (i === 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }
            }

            ctx.closePath()
            ctx.stroke()

            // Secondary inner ring (Indigo)
            ctx.beginPath()
            ctx.strokeStyle = "rgba(99, 102, 241, 0.5)"
            ctx.lineWidth = 1

            for (let i = 0; i < bufferLength; i++) {
                const rad = (i * Math.PI * 2) / bufferLength
                // Invert frequency for inner ring
                const v = dataArray[i] / 128.0
                const r = radius - (v * 20)
                const x = centerX + Math.cos(rad) * r
                const y = centerY + Math.sin(rad) * r

                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.stroke()

            rafRef.current = requestAnimationFrame(render)
        }

        render()
    }

    useEffect(() => {
        if (!isListening) {
            cleanup()
            return
        }

        startListening()

        return () => cleanup()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isListening])

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
            <button
                onClick={onStop}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Listening...</h3>
                <p className="text-slate-400">Speak naturally to Nova</p>
            </div>

            {error ? (
                <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">
                    {error}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-64 h-64 md:w-80 md:h-80"
                >
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                    />
                </motion.div>
            )}

            <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    LIVE MIC
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                    AMAZON CONNECT
                </div>
            </div>
        </div>
    )
}
