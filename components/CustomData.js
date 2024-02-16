function customData() {
    const data = [
        {
            id: 1,
            title: "example.com",
            price: 9.99,
            parcent: 30,
        },
        {
            id: 2,
            title: "example.xyz",
            price: 0.99,
            parcent: 30,
        },
        {
            id: 3,
            title: "example.org",
            price: 9.99,
            parcent: 30,
        },
        {
            id: 4,
            title: "example.info",
            price: 9.99,
            parcent: 30,
        },
    ];

    const datas = document.querySelector(".paid-domain");
    datas.innerHTML = `
        <div>
            ${data
            .map(
                (item) => `
                        <div class='domain-item bg-white lg:h-[88px] w-full rounded-xl grid lg:grid-cols-3 items-center text-lg text-left px-6 my-3 '  style="position: relative; top: 2rem;">
                            <div class='flex items-center gap-3 text-lg py-3 lg:py-0 domain-name'>
                            <div class="checkbox">
                            <input type="checkbox" />
                            </div>
                                <p class='text-[22px] font-semibold'  style="font-size:22px; font-weight:600;">${item?.title}</p>
                            </div>
                            <div class='percent-off mt-3 lg:mt-0'>
                                <p class='w-[120px] text-center rounded-3xl h-[30px] bg-[#1B434D] text-lg text-white'>${item?.parcent}% off</p>
                            </div>
                            <div class='price-container md:flex gap-5 my-3 lg:my-0 items-center lg:ml-36'>
                                <p class='text-[22px] lg:mt-4 font-extrabold'>$${item?.price}/yr</p>
                                <p>
                                    <button class='my-1 lg:my-0 border border-[#1B434D] text-lg w-[129px] h-[42px] font-semibold'>Buy Now</button>
                                </p>
                            </div>
                        </div>
                    `
            )
            .join("")}
        </div>
    `;
}
customData()