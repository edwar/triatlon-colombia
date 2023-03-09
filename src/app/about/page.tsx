import Image from 'next/image'

function about () {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-8'>Acerca de nosotros</h1>

          <div className='md:flex md:items-start md:justify-between mb-8'>
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
                El objeto prioritario del Club será la promoción, fomento y organización de las actividades deportivas, mediante la celebración de competiciones internas, la participación en eventos deportivos y la afiliación y participación en competiciones de las Ligas o Federaciones Nacionales correspondientes a los deportes: Triatlón. Natación. Ciclismo y Atletismo.
              </p>
              <p className='text-gray-700 mb-4'>
                Para el cumplimiento de su objeto el Club hace expreso sometimiento a la Ley 181 de 1995 o Ley del Deporte y a sus disposiciones reglamentarias y  declara la aceptación de las normas antidopaje.  Obtendrá y mantendrá vigente su reconocimiento deportivo, formará parte del Sistema Nacional del Deporte y en lo deportivo actuará bajo la inspección, control y vigilancia de Coldeportes.
              </p>
            </div>
          </div>

          <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>ARTICULO 3º OBJETIVOS GENERALES DEL CLUB DEPORTIVO DE TRIATLO BOANERGES.</h2>
            <ul className='list-disc list-inside'>
              <li className='text-gray-700 mb-2'>Buscar la integración de afiliados por medio del ejercicio físico y el Deporte, facilitando los lugares de encuentro, estancia y esparcimiento para la convivencia social, fomentando la integración cultural, la cordialidad y la amista entre sus integrantes.</li>
              <li className='text-gray-700 mb-2'>Brindar por medio del personal profesional capacitado la enseñanza de los diferentes deportes, sus diferentes tácticas y técnicas en el desarrollo de la condición física de los asociados, teniendo en cuenta el avance y la mejora de la salud, los tiempos y la preparación física de forma objetiva.</li>
              <li className='text-gray-700 mb-2'>Desarrollar competencias para conocer el nivel de los afiliados y deportistas del Club, participando en eventos municipales, regionales, Departamentales  y Nacionales con miras a competencias Internacionales de manera oficial.</li>
            </ul>
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
