import React from "react";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl text-center text-blue-600 mb-4">
        Contacto
      </h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Información de contacto</h2>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Nombre:</span> Pedro Calderón Morales
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Teléfono:</span> 445-135-1541
        </p>
      </div>
    </div>
  );
}

export default Contact;
