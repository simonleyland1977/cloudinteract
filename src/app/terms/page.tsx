import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";

export const metadata = {
    title: 'Terms and Conditions | CloudInteract',
    description: 'Terms and Conditions for products and services supplied by CloudInteract Limited.',
};

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
            <MarketingHeader />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
                        Terms and Conditions
                    </h1>

                    <div className="prose prose-invert prose-slate max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. DEFINITIONS</h2>
                            <ul className="list-disc pl-5 space-y-2 text-slate-400">
                                <li><strong>‘We’ ‘us’ and ‘our’</strong> refer to CloudInteract Limited.</li>
                                <li><strong>‘You’ and ‘your’</strong> refer to the person, firm or company who offers or agrees to buy Products and/or Services from us.</li>
                                <li>The <strong>‘Price’</strong> means the price of Products and/or Services plus any other charges specified in our quotation/proposal.</li>
                                <li>The <strong>‘Contract’</strong> means every agreement between us and you for the sale and purchase of the Products and/or Services and any other products and/or services.</li>
                                <li>The <strong>‘Order’</strong> means an offer from you to buy the Products and/or Services described in our quotation/proposal on the terms and conditions set out herein.</li>
                                <li>The <strong>‘Products’</strong> means the products described in our quotation/proposal. The <strong>‘Services’</strong> means the services described in our quotation/proposal.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. TERMS</h2>
                            <p className="text-slate-400">
                                These terms and conditions shall apply to the Contract. Any offer, order, acceptance, sale and/or delivery or any conduct in confirmation of any transaction will be subject to these terms and conditions which are the only basis upon which we do business and shall prevail notwithstanding any printed or other conditions referred to in any purchase order or other document prepared by you or on your behalf. No other agreement, representation, promise, undertaking or understanding of any kind shall add to, vary or waive any of these terms and conditions unless it is expressly confirmed in writing by one of our directors. A Contract cannot be cancelled except with our consent and on terms which will indemnify us against all loss.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. SUPPLY OF PRODUCTS AND SERVICES</h2>
                            <p className="text-slate-400 mb-4">
                                3.1 We will in normal circumstances supply Products and/or Services for which you send us by letter, fax or e-mail a numbered purchase order in accordance with our current quotation but we shall be entitled:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-400">
                                <li>(a) to withdraw or cancel a quotation at any time without liability for any loss howsoever arising;</li>
                                <li>(b) to refuse or delay the supply where your credit or the conduct of your account is unsatisfactory in our opinion;</li>
                                <li>(c) to modify designs and specifications for Products without prior notification and withdraw Products replacing them with items of the equivalent specification;</li>
                                <li>(d) to vary or withdraw Services by notice to you provided that such variation or withdrawal shall not take effect until the end of the period for which the price of such Services has been paid in advance or for 3 months, whichever is the later.</li>
                            </ul>
                            <p className="text-slate-400 mt-4">
                                3.2 Any software comprised in or supplied with our Products and/or Services is supplied under licence from the software owner and no rights of ownership are transferred to you. You must comply with the terms of the software licence and indemnify us against the consequences of any breach.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. PRICES</h2>
                            <p className="text-slate-400 mb-4">
                                4.1 Notwithstanding any Price specified in our quotation or your purchase order, the Price of the Products and/or Services shall be that applicable on the date of delivery. We shall endeavour to maintain Prices quoted but we reserve the right to increase quoted Prices at any time to take account of increase in costs including (without limitation) costs of labour, materials, carriage or other overheads.
                            </p>
                            <p className="text-slate-400">
                                4.2 Prices for the Products and/or Services do not include, unless otherwise specified, VAT or other sales tax, insurance, delivery or special packing or alteration or installation to your order.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. TERMS OF PAYMENT</h2>
                            <p className="text-slate-400 mb-2">
                                5.1 Our terms of payment are strictly 30 days from date of invoice. You shall not be entitled to make any deduction from the amount of our invoice or withhold payment by reason of any counterclaim or set-off or otherwise.
                            </p>
                            <p className="text-slate-400 mb-2">
                                5.2. We shall be entitled to charge interest at the Barclays Bank plc base rate plus 3% from the date of invoice on the amount of any overdue invoice.
                            </p>
                            <p className="text-slate-400">
                                5.3. Failure by you to pay in accordance with the provisions of this clause shall entitle us, without prejudice to our right to damages, to suspend any outstanding deliveries or to cancel the Contract.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
