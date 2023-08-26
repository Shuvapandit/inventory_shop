const About = () => {
  return (
    <div>
      <div className=" ml-[-20px]">
        <img
          src="https://i.ibb.co/pKjspyv/about-banner1.jpg"
          className=" w-full" 
        />
      </div>
      <h1 className="text-center mt-4 font-bold text-xl">
        Everyday A Better Life
      </h1>
      <div className="text-justify mt-4 mr-4">
        <p>
          Welcome to E-shop, a world of freshness, warm service, and unbeatable
          value! As the largest online grocery chain in Bangladesh and the Best
          Retail Brand in the country, we take pride in ensuring your
          satisfaction and wellbeing. Our mission is to leave you with a smile,
          whether you're browsing through our vast online store or placing an
          order from the comfort of your home.
        </p>
        <p className="mt-3">
          With over 60 outlets, E-shop brings you a unique and refreshing
          shopping experience. Our commitment to providing top-notch service
          means you can expect more from us at every step. Our dedicated team is
          here to serve you in whatever way possible, making your shopping
          journey delightful and hassle-free.
        </p>
        <p className="mt-3">
          So why wait? Come and discover the convenience of online shopping with
          E-shop. Embrace the world of freshness, enjoy warm service, and
          experience the best value in every purchase. Welcome to E-shop, your
          ultimate destination for a delightful shopping experience!
        </p>
      </div>
      <div className="flex items-center justify-center mt-6">
        <img
          src="https://i.ibb.co/4ghkBTP/family.jpg"
          className="h-72 w-2/3 "
        />
      </div>
      <h1 className="text-center mt-4 font-bold text-xl">E-Shop Family</h1>
      <div className="text-justify mt-4 mr-4">
        <p>
          Since 2008, E-shop has been dedicated to providing our customers with
          the very best fresh produce, local and imported household needs, as
          well as an exquisite range of fashions, home accessories, appliances,
          and more. In 2016, E-shop was recognized as the Best Retail Brand in
          the country, as awarded jointly by Kantar Millward Brown and
          Bangladesh Brand Forum.
        </p>
        <p className="mt-3">
          As E-shop, we continue to strive for excellence, ensuring our
          customers' satisfaction and wellbeing are always at the forefront of
          our efforts. With a wide selection of products and a commitment to
          outstanding service, we aim to offer a delightful and convenient
          shopping experience for all our valued customers. Discover the world
          of freshness, warm service, and value at E-shop, your ultimate
          destination for all your grocery and lifestyle needs.
        </p>
      </div>
      <div>
        <h1 className="text-center mt-6 mb-5 font-bold text-xl">
          Achievements & Recognition
        </h1>
        <div className='lg:flex lg:flex-row gap-12 items-center justify-center  mt-4 "'>
          <div>
            <div className="card lg:w-96 sm:w-full md:w-full bg-base-100 ">
              <figure>
                <img
                  src="https://i.ibb.co/hF55jCY/global-GAPIcon.webp"
                  alt="award"
                />
              </figure>
              <h1 className="bg-base-100 text-center">
                GLOBAL G.A.P. INITIAL MEMBERSHIP (2016)
              </h1>
            </div>
          </div>
          <div>
            <div className="card lg:w-96 sm:w-full md:w-full bg-base-100 ">
              <figure>
                <img
                  src="https://i.ibb.co/BwsTgDv/Best-Retail-Icon.webp"
                  alt="award"
                />
              </figure>
              <h1 className="bg-base-100 text-center">
                BEST RETAIL BRAND AWARD , 2016{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <img src="https://i.ibb.co/gmBG44d/about-banner3.jpg" />
      </div>
      <div className="text-justify mt-4 mr-4">
        <p>
          By partnering directly with farmers, E-Shop is revolutionizing the
          journey of food from pristine fields to your table, ensuring an
          authentic farm-fresh taste. Our dedicated teams for food safety and
          nutrition work tirelessly to ensure that what you bring home to your
          family is not only delicious but also safe, healthy, and nourishing.
          E-Shop takes a proactive stance against unsafe food practices and
          plays a pivotal role in promoting a healthier way of life.
        </p>
        <p className="mt-3 mb-12">
          In 2016, E-Shop became a proud member of Global G.A.P, a leading
          private sector entity committed to advancing the critical objectives
          of safe and sustainable agriculture on a global scale. Our extensive
          network of partnerships with numerous suppliers and growers guarantees
          equitable prices and fosters inclusive growth, benefiting all
          stakeholders involved
        </p>
      </div>
    </div>
  );
};
export default About;
