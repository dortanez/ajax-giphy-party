const input = document.querySelector('#giphyInput');
const searchBtn = document.querySelector('#searchBtn');
const results = document.querySelector('.row');
const removeBtn = document.querySelector('#removeBtn');
const token = 'BLkzlROP3d94uc2Ikgykb9QMrTuJNF9A';

async function searchGiphy(e) {
    e.preventDefault();
    input.value = '';
    const res = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {api_key: token, q: input.value}});
    addImageToPage(res.data.data.image_url);
}

function addImageToPage(url) {
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    newImg.src = url;
    newDiv.classList = 'col-md-4 col-lg-3 mt-3'
    newImg.classList = 'img-fluid img-thumbnail';
    newDiv.appendChild(newImg);
    results.appendChild(newDiv);
}

searchBtn.addEventListener('click', searchGiphy);

removeBtn.addEventListener('click', function(e) {
    results.children.remove();
})

