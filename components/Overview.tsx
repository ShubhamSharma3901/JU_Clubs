import React from "react";

function Overview() {
  return (
    <div className="flex flex-col gap-10 w-full laptop:px-[10rem] xsPhone:px-[2rem] py-[5rem] justify-center items-center text-justify text-wrap font-montserrat">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-semibold font-playfair tracking-wide tablet:text-4xl xsPhone:text-2xl">
          OVERVIEW
        </h1>
        <hr className="h-[0.4rem] tablet:w-[6rem] xsPhone:w-[4rem] rounded-xl bg-red-500" />
      </div>

      <div>
        <p className="tablet:text-lg xsPhone:text-md leading-relaxed">
        Welcome to JECRC University Government Schemes! We are committed to 
        fostering holistic development, community engagement, and national service through initiatives 
        like the National Cadet Corps (NCC), National Service Scheme (NSS), Unnat Bharat Abhiyan (UBA), 
        and Ek Bharat Shreshtha Bharat (EBSB). Through these programs, our students develop leadership skills, 
        engage in community service, bridge rural-urban divides, and celebrate India cultural diversity. 
        At JECRC University, we believe in nurturing responsible citizens who not only excel academically 
        but also actively contribute to the welfare of society. Join us in our mission to empower 
        individuals to become catalysts for positive change and contribute meaningfully to the nation&apos;s progress!
        </p>
        
      </div>
    </div>
  );
}

export default Overview;
