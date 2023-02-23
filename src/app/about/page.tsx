import Image from 'next/image'

function about () {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-8'>Acerca de nosotros</h1>

          <div className='md:flex md:items-center md:justify-between mb-8'>
            <div className='md:w-1/2 md:mr-8'>
              <Image
                width={600}
                height={400}
                src='/about/coach.jpg'
                alt='Imagen del equipo de triatlón'
                className='rounded-lg shadow-md mb-4 object-fill w-full'
              />
            </div>
            <div className='md:w-1/2'>
              <p className='text-gray-700 mb-4'>
                Somos un club deportivo de triatlón dedicado a fomentar la práctica del deporte y el estilo de vida saludable.
              </p>
              <p className='text-gray-700 mb-4'>
                Desde nuestros inicios en 2010, nos hemos enfocado en brindar un espacio para que los atletas puedan entrenar, competir y hacer comunidad.
              </p>
              <p className='text-gray-700'>
                Nuestro equipo está formado por atletas de diferentes edades y niveles, desde principiantes hasta triatletas experimentados. Todos son bienvenidos en nuestro club y nuestro objetivo es ayudar a cada uno de nuestros miembros a alcanzar sus metas deportivas.
              </p>
            </div>
          </div>

          <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Nuestros valores</h2>
            <ul className='list-disc list-inside'>
              <li className='text-gray-700 mb-2'>Pasión por el deporte</li>
              <li className='text-gray-700 mb-2'>Respeto y compañerismo</li>
              <li className='text-gray-700 mb-2'>Compromiso con el entrenamiento y la competencia</li>
              <li className='text-gray-700 mb-2'>Fomento de la vida saludable</li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl font-bold mb-4'>Nuestro equipo</h2>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 list-none'>
              <li className='mb-4'>
                <div className='flex items-center'>
                  <Image
                    width={200}
                    height={200}
                    src='/about/person.jpg'
                    alt='Foto de equipo'
                    className='rounded-full h-12 w-12 mr-4'
                  />
                  <div>
                    <h3 className='font-bold'>Juan Pérez</h3>
                    <p className='text-gray-700'>Entrenador principal</p>
                  </div>
                </div>
              </li>
              <li className='mb-4'>
                <div className='flex items-center'>
                  <Image
                    width={200}
                    height={200}
                    src='/about/person.jpg'
                    alt='Foto de equipo'
                    className='rounded-full h-12 w-12 mr-4'
                  />
                  <div>
                    <h3 className='font-bold'>Edwar Amaya</h3>
                    <p className='text-gray-700'>Colaborador</p>
                  </div>
                </div>
              </li>
              <li className='mb-4'>
                <div className='flex items-center'>
                  <Image
                    width={200}
                    height={200}
                    src='/about/person.jpg'
                    alt='Foto de equipo'
                    className='rounded-full h-12 w-12 mr-4'
                  />
                  <div>
                    <h3 className='font-bold'>María González</h3>
                    <p className='text-gray-700'>Encargada de comunicación y eventos</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default about
