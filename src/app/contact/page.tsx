import Wrapper from "../components/wrapper/Wrapper";

export default function page() {
    return (
        <Wrapper>
            <section className="mt-36 ">

                <div className="sm:w-full md:w-[90%] flex sm:flex-col md:flex-row gap-7"> 
                    {/* Left Side (Call & Write to Us) */}
                    <div className="shadow-lg sm:w-full md:w-[30%] h-auto flex flex-col justify-between">
                        <div className="pl-3">
                            <div className="flex justify-start items-center mb-3">
                                <span className="my-2 bg bg-red-500 p-3 pl-3 rounded-[50%]">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="20" fill="" />
                                        <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <h2 className="text-xl font-bold pl-3 mb-2">Call To Us</h2>
                            </div>
                            <ul className="gap-y-1 flex flex-col">
                                <li className="text-sm pl-3">
                                    We are available 24/7, 7 days a week.
                                </li>
                                <br />
                                <li className="text-sm pl-3">
                                    Phone: +8801611112222
                                </li>
                            </ul>
                        </div>
                        <br />
                        <hr />
                        <div className="pl-3">
                            <div className="flex justify-start items-center mb-3">
                                <span className="my-2 bg bg-red-500 py-6 px-5 rounded-[50%]">
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L11 8L21 1M1 15H21V1H1V15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <h2 className="text-xl font-bold pl-3 mb-2">Write To Us</h2>
                            </div>
                            <ul className="gap-y-1 flex flex-col">
                                <li className="text-sm pl-3">
                                    Fill out our form and we will contact you within 24 hours.
                                </li>
                                <br />
                                <li className="text-sm pl-3">
                                    Emails: customer@exclusive.com
                                </li>
                                <br />
                                <li className="text-sm pl-3">
                                    Emails: support@exclusive.com
                                </li>
                            </ul>
                        </div>
                 </div>
</div>
                    
            </section>
        </Wrapper>
    );
}