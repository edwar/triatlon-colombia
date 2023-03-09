import Image from 'next/image'

function mision () {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center mb-8'>Nuestra Misión</h1>
          <div className='flex justify-center'>
            <Image src='/mision/mision.jpg' alt='mision' width={500} height={400} />
          </div>
          <div className='max-w-4xl mx-auto'>
            <p className='text-xl text-gray-700 leading-relaxed mt-6'>
              Crear una cultura entorno de la preparacion fisica y el Deporte, promoviendo la salud, estilos de vida saludable y brindando opciones para nuestros usuarios y atletas de realizar un sin numero de actividades fisicas, que permitan a cualquier persona tener un mejor estado de bienestar.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default mision
