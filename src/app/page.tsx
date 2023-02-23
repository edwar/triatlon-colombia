import Image from 'next/image'

export default function Home () {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='bg-gray-100 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-4xl font-bold mb-4'>Únete al club</h2>
              <p className='mb-4'>Descubre lo que el club de triatlón puede hacer por ti. Participa en eventos, entrena con un equipo y mejora tus habilidades.</p>
              <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300'>Regístrate ahora</button>
            </div>
            <div>
              <Image className='rounded-lg shadow-md mb-4 object-fill w-full' alt='triatlon' width={200} height={200} src='/index/triatlon.jpg' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-8'>Beneficios de unirse al club</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>Entrenamiento en grupo</h3>
              <p className='mb-4'>Entrena con un grupo de personas apasionadas por el triatlón. Mejora tus habilidades y diviértete mientras lo haces.</p>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>Eventos exclusivos</h3>
              <p className='mb-4'>Obtén acceso a eventos exclusivos para miembros del club, incluyendo carreras de triatlón y entrenamientos especializados.</p>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>Comunidad de apoyo</h3>
              <p className='mb-4'>Conoce a otros atletas y forma una comunidad de apoyo para motivarte y compartir tus logros.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-900 text-white py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-4'>Únete hoy mismo</h2>
          <p className='mb-4'>No esperes más para formar parte del club de triatlón. Regístrate hoy y comienza a disfrutar de todos los beneficios.</p>
          <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300'>Regístrate ahora</button>
        </div>
      </section>
    </div>
  )
}
