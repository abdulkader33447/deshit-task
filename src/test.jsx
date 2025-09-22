<div
            key={product.id}
            className="relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className=""
            />
            {/* Title overlay */}
            <div className="absolute sm:-bottom-7 -bottom-4 sm:left-20 left-15 bg-white flex justify-center sm:py-4 py-2 sm:px-10 px-5 rounded-xl shadow">
              <h3>
                {product.title}
              </h3>
            </div>
          </div>