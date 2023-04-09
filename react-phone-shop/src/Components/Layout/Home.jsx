import React from "react";

const Home = () => {
  return (
    <div>
      <h2 className="text-6xl font-semibold text-center p-5 bg-zinc-400">
        Welcome to Apple Store
      </h2>
      <div className="bg-slate-500 p-10 text-xl font-medium">
      <article className='p-5 m-1'>
        Welcome to the world of Apple, where innovative technology meets sleek
        design. The Apple Store is your one-stop-shop for all things Apple,
        whether you're looking for the latest iPhone or the newest MacBook.
      </article>
      <article className='p-5 m-1'>
        At Apple, we strive to create products that enhance and simplify your
        daily life. Our devices are designed with user experience in mind, from
        the intuitive interface of the iPhone to the powerful performance of the
        MacBook Pro.
      </article>

      <article className='p-5 m-1'>
        In addition to our devices, we offer a range of accessories to help you
        get the most out of your Apple products. From protective cases to
        wireless charging stations, our accessories are designed to seamlessly
        integrate with your devices and enhance their functionality. But the
        Apple Store is more than just a place to purchase products. Our
        knowledgeable staff are always available to provide expert advice and
        support, whether you're a seasoned Apple user or new to the ecosystem.
      </article>

      <article className='p-5 m-1'>
        {" "}
        We also offer a range of services to help you get the most out of your
        Apple products. Our One to One program provides personalized training
        and support, while our Genius Bar offers technical assistance and
        repairs. At Apple, we believe that technology should be accessible to
        everyone, which is why we offer financing options and trade-in programs
        to help make our products more affordable.
      </article>
      <article className='p-5 m-1'>
        So whether you're a student, a professional, or just looking for the
        latest and greatest in technology, the Apple Store has everything you
        need to stay connected and productive.
      </article>
      </div>
    </div>
  );
};

export default Home;
