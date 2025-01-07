export default function Home() {
    return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "brightness(0.7)"
          }}
        />
  
        {/* Content */}
        <div className="relative container mx-auto px-4 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Find, Save,{" "}
              <span className="block">and Shop{" "}
                <span className="text-cyan-300">Smarter!</span>
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              GrociFynder is your smart shopping companion, helping you find the best grocery deals and discounts. 
              Save time and money with real-time offers, personalized recommendations, and seamless shopping!
            </p>
          </div>
  
          {/* Navigation Dots */}
          <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  