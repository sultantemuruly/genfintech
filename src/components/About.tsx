import Image from "next/image";

const About = () => {
  return (
    <div id="about-us">
      <div className="mx-auto flex justify-between items-center">
        <div>
          <Image src="about.svg" width={524} height={400} alt="logo" />
        </div>
        <div className="text-white text-center h-[400px] bg-green-600 pr-10 rounded-xl">
          <h1 className="text-4xl font-bold py-[50px]">About US</h1>
          <p className="text-2xl px-16">
            Welcome to GenFinTech Connect – where financial insight meets
            artificial intelligence. Our platform is designed to empower
            investors and businesses by integrating cutting-edge AI technology
            to simplify and enhance financial management.
          </p>
        </div>
      </div>

      <div className="mx-auto pr-[180px] py-[100px] flex justify-between items-center">
        <div className="text-white text-center h-[400px] bg-green-600 pl-10 rounded-xl">
          <h1 className="text-4xl font-bold py-[50px]">Our Mission</h1>
          <p className="text-2xl px-16">
            At GenFinTech Connect, our mission is to revolutionize financial
            data management with innovative tools that make analysis and
            decision-making accessible and intelligent. We aim to empower
            everyone with AI-driven solutions that simplify and enhance their
            financial success.
          </p>
        </div>
        <div>
          <Image src="mission.svg" width={524} height={400} alt="logo" />
        </div>
      </div>
      <div>
        <div className="mx-auto px-[180px] pb-[100px]">
          <h2 className="text-4xl font-bold mb-4">Our Features</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <h3 className="text-2xl font-semibold">
                Data Upload & Analysis:
              </h3>
              <p className="text-lg pt-4">
                Easily upload company financial data and let our advanced AI
                algorithms analyze and interpret it. Whether you’re a seasoned
                investor or a business owner, our AI-driven insights provide
                clarity and guidance on investment decisions.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Investment Advice:</h3>
              <p className="text-lg pt-4">
                Get tailored investment recommendations based on real-time data
                and predictive analytics. Our AI continuously learns and adapts,
                offering you personalized advice to help you make informed
                decisions.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">AI-Powered Accounting:</h3>
              <p className="text-lg pt-4">
                Simplify your accounting tasks with our AI-powered tools. From
                automated bookkeeping to expense tracking and financial
                forecasting, our platform streamlines your accounting processes,
                saving you time and reducing errors.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
