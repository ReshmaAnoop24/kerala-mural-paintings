export const metadata = {
  title: 'About Us - Susheela Arts',
  description: 'Learn about the history, heritage, and cultural significance of Susheela Arts and Kerala mural paintings.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Susheela Arts</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            A legacy of strokes, tradition, and timeless beauty rooted in the heart of Alappuzha.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Our Heritage</h2>

              <p className="text-lg text-gray-700 mb-6">
                The story of Susheela Arts began in the 1980s in the heart of Alappuzha, founded by the
                visionary Late Artist B. Ramesan. With a master's touch in portraits and fine drawings,
                Ramesan Sir built a reputation for capturing the soul of his subjects on canvas. His
                dedication to the craft turned Susheela Arts into a local landmark for artistic excellence,
                known for precision, emotion, and a deep love for the visual arts.
              </p>

              <h3 className="text-2xl font-semibold text-primary-800 mb-3">A Family Tradition Continued</h3>
              <p className="text-lg text-gray-700 mb-6">
                Today, that same passion flows through a new generation. The legacy of B. Ramesan is kept
                alive and flourishing by his son, daughter, and daughter-in-law. As a family-run collective,
                we bridge the gap between traditional mastery and contemporary vision. We don't just see art
                as a business — it is our inheritance and our greatest passion.
              </p>

              <h3 className="text-2xl font-semibold text-primary-800 mb-3">Our Specialization</h3>
              <p className="text-lg text-gray-700 mb-6">
                While our roots lie in classical portraiture, Susheela Arts has evolved to become a premier
                destination for Kerala Mural Painting. We are dedicated to preserving and celebrating this
                ancient art form. Each of our pieces is a labor of love, characterized by authentic
                techniques true to traditional color palettes, intricate storytelling that brings legends to
                life with vibrant hues and rhythmic lines, and a modern elegance that adapts mural aesthetics
                to fit beautifully into homes, offices, and sacred spaces.
              </p>

              <h3 className="text-2xl font-semibold text-primary-800 mb-3">Our Mission</h3>
              <p className="text-lg text-gray-700">
                At Susheela Arts, we believe that art should resonate with history. Whether it is a
                custom-commissioned mural or a piece from our collection, we strive to bring the divine
                beauty of Kerala's artistic tradition into your life — just as our founder did over four
                decades ago.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/artist.png"
                alt="Late Artist B. Ramesan - Founder of Susheela Arts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12">
            Traditional Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">Color Palette</h3>
              <p className="text-gray-700 mb-4">
                Kerala murals are known for their distinctive color scheme, traditionally using five primary colors:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Yellow (Pachcha):</strong> Derived from laterite soil</li>
                <li><strong>Red (Chuvanna):</strong> Made from red ochre</li>
                <li><strong>Green (Neela):</strong> Created from green leaves</li>
                <li><strong>White (Vella):</strong> From lime or shell powder</li>
                <li><strong>Black (Karuppu):</strong> From lamp black or charcoal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">Painting Process</h3>
              <p className="text-gray-700 mb-4">
                The creation of a Kerala mural involves several meticulous steps:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Preparation of the wall surface with multiple layers of lime and sand</li>
                <li>Sketching the outline using charcoal or pencil</li>
                <li>Applying base colors in specific order</li>
                <li>Adding intricate details and fine lines</li>
                <li>Final touches and protective coating</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12">
            Cultural Significance
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Kerala mural paintings hold immense cultural and religious significance. They serve as visual
                narratives of Hindu mythology, depicting stories from the Puranas, Ramayana, Mahabharata, and
                other sacred texts. These artworks were not merely decorative but were considered sacred,
                believed to invoke divine presence and blessings.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The themes commonly depicted include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">Mythological Stories</h4>
                  <p className="text-gray-700">
                    Episodes from Hindu epics and Puranas, bringing ancient stories to life through vibrant imagery.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">Deities and Gods</h4>
                  <p className="text-gray-700">
                    Portrayals of various Hindu deities, each with specific iconography and symbolic meanings.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">Temple Rituals</h4>
                  <p className="text-gray-700">
                    Scenes depicting religious ceremonies, festivals, and traditional practices.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">Nature and Animals</h4>
                  <p className="text-gray-700">
                    Floral patterns, animals, and natural elements that hold symbolic significance.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                Today, Kerala mural paintings continue to be a source of inspiration for contemporary artists
                and are recognized as an important part of India's intangible cultural heritage. Efforts are
                being made to preserve this traditional art form and pass it on to future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Revival Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Preserving Tradition for the Future
          </h2>
          <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
            While Kerala mural paintings have ancient roots, they continue to evolve and inspire.
            Modern artists are keeping this tradition alive by creating new works while respecting
            traditional techniques and themes. Our gallery showcases both classical and contemporary
            interpretations of this magnificent art form.
          </p>
        </div>
      </section>
    </div>
  )
}
