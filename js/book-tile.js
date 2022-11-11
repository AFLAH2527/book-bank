const bookTile = ({
  image,
  course_code,
  title,
  count,
}) => ` <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md 2 m-2 rounded-md">
  <a class="block relative h-48 rounded overflow-hidden">
  ${
    image
      ? `
  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${image}">
  `
      : `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="object-cover object-center w-full h-full block text-blue-500">
  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
</svg>`
  }



  </a>
  <div class="mt-4">
    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${course_code}</h3>
    <h2 class="text-gray-900 title-font text-lg font-medium">${title}</h2>
    <p class="mt-1 mb-4">Count: ${count}</p>
    <a class="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md" href="request.html">Request </a>
  </div>
  </div>`;

`
  `;

{
  /* <a target="_blank" class="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md" href="https://wa.me/917736952527?text=${encodeURI(
  `Hi i would like to order the book ${title} with the course code: ${course_code}`
)}">Request </a> */
}
