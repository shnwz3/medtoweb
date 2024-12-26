import * as React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    description: "Specializing in cardiovascular health with over 15 years of experience"
  },
  {
    id: 2,
    name: "Dr. Rajiah Chen",
    specialty: "Neurologist",
    image: "data:image/jpeg;base64,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",
    description: "Expert in neurological disorders and brain health"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    description: "Dedicated to children's health and development"
  }
];

export default function DoctorsSection() {
  return (
    <section aria-labelledby="doctors-heading" className="mt-16 w-full max-w-[1166px]">
      <h2 id="doctors-heading" className="text-3xl font-semibold text-sky-500 text-center">
        OUR DOCTORS
      </h2>
      <p className="mt-4 text-4xl font-semibold text-black text-center">
        Meet Our Professional Doctors
      </p>
      <p className="mt-6 text-base font-semibold text-zinc-400 text-center">
        Get to know the dedicated physicians who form the backbone of MedtoWeb
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {doctors.map((doctor) => (
          <article 
            key={doctor.id}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
          >
            <img
              loading="lazy"
              src={doctor.image}
              alt={`Portrait of ${doctor.name}`}
              className="w-48 h-48 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-sky-700">{doctor.name}</h3>
            <p className="text-lg text-green-500 mb-2">{doctor.specialty}</p>
            <p className="text-base text-gray-600 text-center">{doctor.description}</p>
            <button
              aria-label={`Book appointment with ${doctor.name}`}
              className="mt-4 px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Book Appointment
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}