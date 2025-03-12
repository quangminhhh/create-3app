export default function HomePage() {
    return (
      <main className="bg-black text-white min-h-screen overflow-hidden relative font-sans">
        {/* Các ngôi sao nhấp nháy */}
        <div className="fixed inset-0 z-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 5 + 2}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Gradient overlay cho backround */}
        <div className="fixed inset-0 bg-gradient-to-b from-purple-900/30 via-blue-900/30 to-black/80 z-0"></div>

        {/* Header */}
        <header className="relative z-10 pt-6 px-4 md:px-8 lg:px-16">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="text-xl font-bold tracking-wider">COSMOS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Trang chủ</a>
              <a href="#planets" className="hover:text-blue-400 transition-colors">Hành tinh</a>
              <a href="#galaxies" className="hover:text-blue-400 transition-colors">Thiên hà</a>
              <a href="#exploration" className="hover:text-blue-400 transition-colors">Khám phá</a>
            </div>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium">Khám phá ngay</button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-20 pb-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
            Khám phá vũ trụ vô tận
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Hãy bắt đầu cuộc hành trình khám phá những bí ẩn của vũ trụ bằng cách làm một điếu cỏ cùng tôi nhé !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-white shadow-lg shadow-purple-500/20">
              Bắt đầu hút cỏ
            </button>
            <button className="px-8 py-3 rounded-full border border-blue-500 hover:bg-blue-900/30 transition-all font-medium text-white">
              Tìm cỏ ngay
            </button>
          </div>
        </section>

        {/* Planets Section */}
        <section id="planets" className="relative z-10 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Hành tinh nổi bật</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">Khám phá những hành tinh kỳ diệu trong hệ mặt trời của chúng ta và xa hơn nữa.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sao Hỏa", desc: "Hành tinh đỏ với bề mặt sa mạc rộng lớn và thung lũng sâu", color: "from-red-600 to-orange-500" },
                { name: "Sao Thổ", desc: "Nổi tiếng với hệ thống vành đai đá và băng tuyệt đẹp", color: "from-yellow-600 to-amber-500" },
                { name: "Sao Hải Vương", desc: "Khí khổng lồ xanh với những cơn bão mạnh nhất trong hệ mặt trời", color: "from-blue-600 to-cyan-500" },
                { name: "Sao Mộc", desc: "Hành tinh lớn nhất với vết đỏ lớn và nhiều mặt trăng", color: "from-orange-600 to-amber-500" },
                { name: "Sao Kim", desc: "Hành tinh nóng nhất với bầu khí quyển dày đặc", color: "from-yellow-500 to-amber-400" },
                { name: "Sao Thiên Vương", desc: "Hành tinh nghiêng với các vành đai và mặt trăng đặc biệt", color: "from-cyan-500 to-teal-400" }
              ].map((planet, index) => (
                <div key={index} className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer">
                  <div className={`h-48 bg-gradient-to-br ${planet.color} flex items-center justify-center`}>
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${planet.color}`}></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{planet.name}</h3>
                    <p className="text-gray-400">{planet.desc}</p>
                    <button className="mt-4 px-4 py-2 text-sm rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                      Khám phá thêm
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galaxy Section */}
        <section id="galaxies" className="relative z-10 py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black/0 via-purple-900/20 to-black/0">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Thiên hà tuyệt đẹp</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">Những thiên hà vô tận chứa đựng hàng tỷ ngôi sao và bí ẩn chưa được khám phá.</p>

            <div className="overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-purple-500/20">
                {[
                  { name: "Dải Ngân Hà", desc: "Thiên hà xoắn ốc chứa Trái Đất" },
                  { name: "Tiên Nữ", desc: "Thiên hà elip lớn gần Dải Ngân Hà" },
                  { name: "Tam Giác", desc: "Thiên hà xoắn ốc đẹp trong chòm Tam Giác" },
                  { name: "Bánh Xe", desc: "Thiên hà vòng với cấu trúc độc đáo" }
                ].map((galaxy, index) => (
                  <div key={index} className="group relative aspect-square overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-600 opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold mb-2">{galaxy.name}</h3>
                      <p className="text-gray-200">{galaxy.desc}</p>
                      <button className="mt-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        Xem chi tiết
                      </button>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-purple-500/80 to-blue-500/80 blur-xl"></div>
                    </div>
                    <div className="absolute inset-0 opacity-80 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-2xl font-bold">{galaxy.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Space Exploration Section */}
        <section id="exploration" className="relative z-10 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Khám phá không gian</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">Hành trình của con người vào không gian tiếp tục mở rộng tầm hiểu biết của chúng ta.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="h-64 md:h-96 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Chương trình khám phá Sao Hỏa</h3>
                  <p className="text-gray-400 mb-4">
                    Các sứ mệnh đến Sao Hỏa đang mở ra cánh cửa cho việc hiểu biết sâu hơn về hành tinh đỏ và tiềm năng của sự sống ngoài Trái Đất.
                  </p>
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                    Tìm hiểu các sứ mệnh
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {[
                  { title: "Trạm vũ trụ quốc tế", desc: "Phòng thí nghiệm trên quỹ đạo lớn nhất của nhân loại" },
                  { title: "Kính viễn vọng không gian", desc: "Mở rộng tầm nhìn của chúng ta về vũ trụ" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden flex-1">
                    <div className="h-40 bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.desc}</p>
                      <button className="px-4 py-2 text-sm rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                        Xem thêm
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative z-10 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cập nhật tin tức vũ trụ</h2>
            <p className="text-gray-400 mb-8">Đăng ký để nhận những tin tức mới nhất về khám phá không gian và các sự kiện thiên văn.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all font-medium whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-10 px-4 md:px-8 lg:px-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <span className="text-lg font-bold tracking-wider">COSMOS</span>
                </div>
                <p className="text-gray-400 mb-4">Khám phá vũ trụ vô tận và những bí ẩn của nó qua những bài viết, hình ảnh và video hấp dẫn.</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <div className="w-4 h-4 bg-white/80 mask-icon"></div>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <div className="w-4 h-4 bg-white/80 mask-icon"></div>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <div className="w-4 h-4 bg-white/80 mask-icon"></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Trang chủ</a></li>
                  <li><a href="#planets" className="hover:text-white transition-colors">Hành tinh</a></li>
                  <li><a href="#galaxies" className="hover:text-white transition-colors">Thiên hà</a></li>
                  <li><a href="#exploration" className="hover:text-white transition-colors">Khám phá</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Thông tin liên hệ</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-gray-700 rounded-full mt-0.5"></span>
                    <span>Đài thiên văn Vũ Trụ, Hà Nội, Việt Nam</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-gray-700 rounded-full mt-0.5"></span>
                    <span>info@cosmos.vn</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-gray-700 rounded-full mt-0.5"></span>
                    <span>+84 123 456 789</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
              <p>&copy; 2025 COSMOS. Tất cả các quyền được bảo lưu.</p>
            </div>
          </div>
        </footer>
      </main>
    );
  }
