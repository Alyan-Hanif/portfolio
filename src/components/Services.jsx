export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#080807] text-[#D1D1D7]  px-6 sm:px-12 py-20 rounded-t-[50px]"
    >
      {/* Top Row */}
      <div className=" mx-auto">
        <h2 className="text-5xl sm:text-[6rem] font-extrabold leading-none tracking-tight">
          WHAT I DO <span>/</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <span className="text-sm uppercase tracking-wider text-gray-400">
              (Services)
            </span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in building full-stack web applications that are fast,
            reliable, and user-friendly. With a solid foundation in both
            frontend and backend technologies, I help bring ideas to life
            whether it's for a business, a startup, or a product team.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-12" />

        {/* Service Item */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Number */}
          <span className="text-3xl font-bold text-gray-400">(01)</span>

          {/* Details */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Full-Stack Development
            </h3>
            <p className="text-gray-400 mb-6">
              From frontend interactions to backend APIs, I build complete web
              solutions. I work with modern stacks to deliver apps that are
              scalable, maintainable, and ready for real-world users.
            </p>

            {/* Skills List */}
            <ul className="space-y-2 text-lg">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">01</span> React, Node.js,
                Express.js
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">02</span> REST APIs, Firebase,
                Docker
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">03</span> Git, GitHub, Postman
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-12" />

        {/* Service Item */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Number */}
          <span className="text-3xl font-bold text-gray-400">(02)</span>

          {/* Details */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Full-Stack Development
            </h3>
            <p className="text-gray-400 mb-6">
              From frontend interactions to backend APIs, I build complete web
              solutions. I work with modern stacks to deliver apps that are
              scalable, maintainable, and ready for real-world users.
            </p>

            {/* Skills List */}
            <ul className="space-y-2 text-lg">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">01</span> React, Node.js,
                Express.js
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">02</span> REST APIs, Firebase,
                Docker
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">03</span> Git, GitHub, Postman
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
