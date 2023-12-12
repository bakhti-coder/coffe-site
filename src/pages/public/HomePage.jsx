import titul from "../../assets/icons/titul.svg";
import alowishuscoffee from "../../assets/images/alowishuscoffee.png";
import IntroEclipse from "../../assets/icons/IntroEclipse.svg";
import countrywide from "../../assets/icons/countrywide.svg";
import ordercoffee from "../../assets/images/ordercoffee.png";
import stars from "../../assets/icons/stars.svg";
import grazed from "../../assets/icons/grazed.svg";
import { useState } from "react";
import { useEffect } from "react";
import request from "./../../server/index";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await request.get("products/get-all");
        setData(data.data);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <main>
      <section className="bg-[#EEEFF1]">
        <div className="container">
          <div className="flex justify-between  pt-[104px]">
            <div className="flex flex-col mt-[154px] mb-[162px]">
              <span className="flex ">
                <h1 className="text-[124px] font-[Extrabold] max-w-[597px] leading-[140px]">
                  Alowishus Delicious Coffee
                  <img className="inline ml-[20px]" src={titul} alt="" />
                </h1>
              </span>
              <p className="text-[#64646A] max-w-[530px] text-[24px] leading-[normal] mt-[30px] mb-[60px]">
                A drink from the ‘My Alowishus’ bottled brews range OR grab one
                of our delicious coffee’s.
              </p>
              <div className="flex items-center gap-x-[30px]">
                <button className="px-[40px] py-5 bg-[#1B1B1D] text-white rounded-[126px] text-[18px] uppercase font-[Medium]">
                  Download App
                </button>
                <a
                  href=""
                  className="text-[18px] text-[#1B1B1D] underline font-[Medium] uppercase"
                >
                  Shop Coffee
                </a>
              </div>
            </div>
            <div className="mt-[123px] relative ">
              <img
                className="absolute top-[70px] right-[10px]"
                src={IntroEclipse}
                alt=""
              />
              <img className="absolute right-0" src={countrywide} alt="" />
              <img src={alowishuscoffee} alt="" />
              <div className="absolute px-[24px] bg-white top-[400px] py-[20px] shadow-md rounded-3xl">
                <img src={stars} alt="" />
                <p className="max-w-[232px] text-[#64646A] text-[19px] mt-3 ">
                  4.9 out of 5 Overall Star Rating for All Local Business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[150px]">
        <div className="container">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-[#1B1B1D] text-[64px] font-[Extrabold] leading-[70%] text-center mb-6">
              Explore Our Alowishus
            </h2>
            <p className="text-[24px] text-[#64646A] max-w-[604px] text-center">
              {`A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.`}
            </p>
            <div className="flex items-center justify-between mt-[90px] w-full">
              <div className="w-[393px] h-[540px] rounded-3xl text-[#1B1B1D] shadow-xl hover:shadow-2xl p-10 cursor-pointer">
                <h3 className="text-[36px] text-left font-[Semibold]">
                  Our Catering
                </h3>
                <p className="text-[#64646A] text-[24px] leading-normal">
                  Alowishus Catering, delicious drop off Catering
                </p>
                <div className="flex items-center flex-col">
                  <span className="w-[150px] h-[150px] block my-[60px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      viewBox="0 0 150 150"
                      fill="none"
                    >
                      <path
                        d="M125.625 78.7087C124.944 77.9296 124.367 77.0796 123.892 76.1821C123.658 100.304 103.965 119.857 79.7891 119.857C55.4681 119.857 35.6811 100.07 35.6811 75.7488C35.6811 51.4279 55.4681 31.6409 79.7891 31.6409C100.711 31.6409 118.278 46.2847 122.779 65.8604L126.773 36.1669L126.863 35.4993C115.489 22.2161 98.6066 13.7828 79.7891 13.7828C65.1083 13.7828 51.6058 18.918 40.9772 27.4822V28.1234V28.691V41.268V41.7673C40.9772 50.1681 36.6231 57.8378 29.7335 62.2204V111.382V112.229C41.0142 127.665 59.2485 137.714 79.7891 137.714C101.373 137.714 120.412 126.619 131.51 109.834V108.926V82.594C129.259 81.8615 127.218 80.5307 125.625 78.7087Z"
                        fill="#64646A"
                      />
                      <path
                        d="M79.7891 39.1372C59.6013 39.1372 43.177 55.5611 43.177 75.7493C43.177 95.9376 59.6008 112.361 79.7891 112.361C99.9774 112.361 116.401 95.9376 116.401 75.7493C116.401 55.5611 99.9769 39.1372 79.7891 39.1372Z"
                        fill="#64646A"
                      />
                      <path
                        d="M149.833 7.23393C149.833 4.0437 147.247 1.45764 144.057 1.45764C141.164 1.45764 138.718 3.59695 138.332 6.46386L129.892 69.2034C129.67 70.855 130.172 72.5216 131.268 73.7759C132.365 75.0302 133.95 75.7493 135.617 75.7493H139.006V143.045C139.006 146.081 141.467 148.542 144.503 148.542C147.538 148.542 149.999 146.081 149.999 143.045L149.833 7.23393Z"
                        fill="#64646A"
                      />
                      <path
                        d="M33.4814 8.45372C33.4814 6.38338 31.8038 4.70581 29.7334 4.70581C27.6631 4.70581 25.9855 6.38338 25.9855 8.45372V29.1917H20.4886V8.45372C20.4886 6.38338 18.811 4.70581 16.7407 4.70581C14.6703 4.70581 12.9928 6.38338 12.9928 8.45372V29.1917H7.49583V8.45372C7.49583 6.38338 5.81826 4.70581 3.74791 4.70581C1.67757 4.70581 0 6.38338 0 8.45372V42.2679C0 49.5733 4.70588 55.7969 11.2437 58.0771V143.045C11.2437 146.081 13.7049 148.542 16.7407 148.542C19.7765 148.542 22.2376 146.081 22.2376 143.045V58.0771C28.7755 55.7969 33.4814 49.5733 33.4814 42.2679V8.45372Z"
                        fill="#64646A"
                      />
                    </svg>
                  </span>
                  <button className="w-[225px] bg-[#1B1B1D] text-white rounded-[126px] h-[60px] uppercase">
                    Order cathering
                  </button>
                </div>
              </div>
              <div className="w-[393px] h-[540px] rounded-3xl text-[#1B1B1D] shadow-xl hover:shadow-2xl p-10 cursor-pointer">
                <h3 className="text-[36px] text-left font-[Semibold]">
                  The Food
                </h3>
                <p className="text-[#64646A] text-[24px] leading-normal">
                  Our entire menu is available as dine in or takeaway.
                </p>
                <div className="flex items-center flex-col">
                  <span className="w-[150px] h-[150px]  block my-[60px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      viewBox="0 0 150 150"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_99)">
                        <path
                          d="M45.3188 104.313C41.3523 102.038 38.6721 97.7634 38.6721 92.8711C38.6721 72.678 55.1001 56.25 75.2932 56.25H90.3845L91.0952 44.5312H5.58496L11.727 145.871C11.8678 148.191 13.7892 150 16.1135 150H43.0781C40.3132 146.325 38.6721 141.759 38.6721 136.816C38.6721 131.118 42.3068 126.254 47.3788 124.417C45.5809 121.66 44.5315 118.373 44.5315 114.844C44.5315 111.311 45.5832 108.021 47.3845 105.262C45.9517 104.939 45.1563 104.622 45.3188 104.313Z"
                          fill="#64646A"
                        />
                        <path
                          d="M48.3353 35.7433C48.3387 35.7433 48.3421 35.7422 48.3456 35.7422H92.2852C94.7124 35.7422 96.6797 33.7749 96.6797 31.3477C96.6797 28.9204 94.7124 26.9531 92.2852 26.9531H56.4526L68.2983 8.78906H83.4961C85.9234 8.78906 87.8906 6.82182 87.8906 4.39453C87.8906 1.96724 85.9234 0 83.4961 0H65.918C64.4325 0 63.0478 0.749588 62.2375 1.99356L45.9595 26.9531H4.39453C1.96724 26.9531 0 28.9204 0 31.3477C0 33.7749 1.96724 35.7422 4.39453 35.7422H48.3192C48.325 35.7422 48.3307 35.7433 48.3353 35.7433Z"
                          fill="#64646A"
                        />
                        <path
                          d="M47.4609 92.8711C47.4609 95.2984 49.4282 97.2656 51.8555 97.2656H145.605C148.033 97.2656 150 95.2984 150 92.8711C150 77.5246 137.514 65.0391 122.168 65.0391H75.293C59.9464 65.0391 47.4609 77.5246 47.4609 92.8711Z"
                          fill="#64646A"
                        />
                        <path
                          d="M62.1094 106.055C57.2548 106.055 53.3203 109.989 53.3203 114.844C53.3203 119.698 57.2548 123.633 62.1094 123.633H135.352C140.206 123.633 144.141 119.698 144.141 114.844C144.141 109.989 140.206 106.055 135.352 106.055H62.1094Z"
                          fill="#64646A"
                        />
                        <path
                          d="M145.605 132.422H51.8555C49.4282 132.422 47.4609 134.389 47.4609 136.816C47.4609 144.086 53.3752 150 60.6445 150H136.816C144.086 150 150 144.086 150 136.816C150 134.389 148.033 132.422 145.605 132.422Z"
                          fill="#64646A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_99">
                          <rect width="150" height="150" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <button className="w-[225px] bg-[#1B1B1D] text-white rounded-[126px] h-[60px] uppercase">
                    food menu
                  </button>
                </div>
              </div>
              <div className="w-[393px] h-[540px] rounded-3xl text-[#1B1B1D] shadow-xl hover:shadow-2xl p-10 cursor-pointer">
                <h3 className="text-[36px] text-left font-[Semibold]">
                  The Gelato
                </h3>
                <p className="text-[#64646A] text-[24px] leading-normal">
                  Life is like GELATO, enjoy it before it melts.
                </p>
                <div className="flex items-center flex-col">
                  <span className="w-[150px] h-[150px] block my-[60px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      viewBox="0 0 150 150"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_112)">
                        <path
                          d="M116.158 51.6431C114.487 50.5733 113.615 48.6526 113.937 46.7507C118.043 22.3889 99.2328 0.345636 75.0324 0.0040446C49.8344 -0.3535 30.5414 22.3538 35.0644 47.2453C35.4022 49.1156 34.6421 51.0331 33.1281 52.1279C28.9395 55.1591 26.6247 60.058 26.9375 65.2254C27.754 78.7148 44.6458 84.2447 53.3326 74.0623C53.4546 74.1374 53.5797 74.2156 53.7017 74.2879C54.978 75.0605 55.7381 76.3803 55.7381 77.8195V84.2853C55.7381 86.7378 56.711 89.0273 58.4784 90.7321C64.1099 96.165 73.656 92.2689 73.656 84.1289V69.4765C73.656 65.9073 77.8227 64.0148 80.3627 66.4832C81.1385 67.2371 81.5639 68.2443 81.5639 69.3201V76.8276C81.5639 81.8523 85.7127 85.9598 90.8513 85.7837C97.6049 85.5331 99.0407 80.4284 99.413 76.5523C109.14 83.4198 122.636 76.7237 123.08 64.866C123.277 59.5666 120.625 54.4991 116.158 51.6431ZM68.3382 20.8908C66.2014 21.6028 66.0666 21.9791 65.1256 21.9791C62.4501 21.9791 61.6559 18.3308 64.0683 17.2087C64.9442 16.8021 65.8513 16.4423 66.7679 16.1389C68.0817 15.7041 69.4956 16.4173 69.9304 17.7311C70.3621 19.0421 69.652 20.4588 68.3382 20.8908ZM52.6601 37.1223C51.0356 37.1223 49.8397 35.6021 50.2264 34.0224C51.1179 30.4 52.8446 26.9528 55.2282 24.0593C56.1041 22.9926 57.6838 22.8393 58.7505 23.7152C59.8172 24.5942 59.9705 26.1708 59.0915 27.2375C57.1833 29.5585 55.8007 32.3144 55.0875 35.2173C54.8091 36.3594 53.7862 37.1223 52.6601 37.1223ZM104.392 83.97C105.863 84.2469 106.714 85.799 106.163 87.1907L83.7752 143.717C80.4644 152.093 68.4499 152.097 65.1378 143.717L42.8168 87.3653C42.245 85.922 43.1831 84.337 44.7209 84.1227C45.7316 83.9816 46.736 83.7636 47.7239 83.4664C49.176 83.0297 50.6612 84.0126 50.8054 85.5219C51.0387 87.9646 51.9174 91.3608 55.0027 94.336C62.6694 101.729 74.8312 97.99 77.9259 88.7379C78.4586 87.1451 80.4134 86.617 81.7181 87.6743C87.8239 92.6227 97.5251 91.6677 101.927 84.9554C102.415 84.2121 103.333 83.7705 104.392 83.97Z"
                          fill="#64646A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_112">
                          <rect width="150" height="150" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <button className="w-[225px] bg-[#1B1B1D] text-white rounded-[126px] h-[60px] uppercase">
                    Discover more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[40px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-full h-[575px]">
              <img src={ordercoffee} alt="" />
            </div>
            <div className="max-w-[512px]">
              <h2 className="text-[64px] leading-[70px] font-[EXtrabold]">
                Order Your Favourite Coffee
              </h2>
              <p className="mt-[30px] mb-[60px] text-[24px] text-[#64646A]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="rounded-[126px] font-[Medium] bg-[#1B1B1D] px-[40px] py-[20px] text-white uppercase text-[18px]">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[170px] w-full">
        <div className="container">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-[#1B1B1D] text-[64px] font-[Extrabold] leading-[70%] text-center mb-6">
              Best Selling Coffee
            </h2>
            <p className="text-[24px] text-[#64646A] max-w-[604px] text-center mb-[178px]">
              A drink from the ‘My Alowishus’ bottled brews range OR grab one of
              our delicious coffee’s.
            </p>
            <div className="flex items-center justify-between w-full">
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                data.map((el) => (
                  <div
                    key={el.name}
                    className=" h-[471px] rounded-3xl shadow-xl hover:shadow-2xl  px-[30px] pt-[41px] pb-[35px]"
                  >
                    <div className="relative">
                      <img
                        className="absolute top-[-118px] left-[-30px]"
                        src={grazed}
                        alt=""
                      />
                      <div className="ml-[172px] mb-[87px]">
                        <p className="mb-2 text-[#64646A] font-[Medium] text-[20px] leading-[140%]">
                          #1{el.category.id} {el.category.name}
                        </p>
                        <h3 className="text-[40px] font-[Semibold] leading-[110%] text-[#1B1B1D]">
                          {el.name}
                        </h3>
                      </div>
                      <p className="text-[#64646A] leading-[140%] text-[20px] my-10 font-[Regular]">
                        {el.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-[30px] font-[Medium] leading-[93%] text-[#1B1B1D]">
                          ${el.price}
                        </p>
                        <button className="rounded-[126px] font-[Medium] bg-[#1B1B1D] px-[30px] py-[15px] text-white uppercase text-[18px]">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
