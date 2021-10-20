const bookTile = ({
  img,
  course_code,
  title,
  count,
}) => ` <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md 2 m-2 rounded-md">
  <a class="block relative h-48 rounded overflow-hidden">
    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="img/books/${img}">
  </a>
  <div class="mt-4">
    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${course_code}</h3>
    <h2 class="text-gray-900 title-font text-lg font-medium">${title}</h2>
    <p class="mt-1 mb-4">Count:${count}</p>
    <a target="_blank" class="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md" href="https://wa.me/917736952527?text=${encodeURI(
      `Hi i would like to order the book ${title} with the course code: ${course_code}`
    )}">Request </a>
  </div>
  </div>`;
