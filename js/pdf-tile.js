const pdfTile = ({ code, title, pdf, prev_question }) => `<tr>
<td class="px-4 py-3">${code}</td>
<td class="px-4 py-3">${title}</td>
<td class="px-4 py-3"><a class="text-blue-500 underline" href="${pdf}">Download</a></td>
<td class="px-4 py-3"><a class="text-blue-500 underline" href="${prev_question}">Download</a></td>
</tr>`;
