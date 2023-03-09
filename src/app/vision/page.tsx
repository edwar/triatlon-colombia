import Image from 'next/image'

function vision () {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center mb-8'>Nuestra Visión</h1>
          <div className='flex justify-center'>
            <Image src='/vision/vision.jpg' alt='vision' width={500} height={400} />
          </div>
          <div className='max-w-4xl mx-auto'>
            <p className='text-xl text-gray-700 leading-relaxed mt-6'>
              Crear las oportunidades Deportivas para nuestra region, al alcance de todos, con metas claras, enseñando siempre disciplina, esfuerzo y trabajo en equipo, para poder vencer nuestros propios miedos, haciendo de nuestro Club, un lugar con profesionales que nos guian a  cumplir nuestros objetivos personales de forma competitiva, mostrando el respeto y el juego limpio en cada uno de los eventos o competencias Regionales, Dapartamentales y Nacionales.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default vision
