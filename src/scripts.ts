import axios from 'axios';

// axios.get('http://localhost:3004/countries').then((response) => {
//   console.log(response);
// });

axios.get('http://localhost:3004/countries').then((response) => {
  createRow(response.data);
});

const tableBody = document.querySelector('tbody');

const createRow = (data: any) => {
  data.forEach((element: any) => {
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
    <th scope="row"><img src="" alt="${element.code}"></th>
    <td>${element.region}</td>
    <td>${element.name}</td>
    <td>${element.capital}</td>
    <td> 
        <span class="symbol">
            ${element.currency.symbol}
        </span> 
    ${element.currency.name}
    </td>
    <td>${element.language.name}</td>
    `;

    if (element.currency.symbol === null) {
      tableRow.querySelector('.symbol').classList.add('hidden');
    }

    tableBody.appendChild(tableRow);
  });
};

function regionInputFunc() {
  // Declare variables
  let td; let i; let
    txtValue;
  const regionInput = document.getElementById('myRegion');
  const filter = regionInput.value.toUpperCase();
  const table = document.getElementById('myTable');
  const tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i += 1) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

document.querySelector('#myRegion').addEventListener('input', () => regionInputFunc());

function countryInputFunc() {
  // Declare variables
  let td; let i; let
    txtValue;
  const countryInput = document.getElementById('myCountry');
  const filter = countryInput.value.toUpperCase();
  const table = document.getElementById('myTable');
  const tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i += 1) {
    td = tr[i].getElementsByTagName('td')[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

document.querySelector('#myCountry').addEventListener('input', () => countryInputFunc());

function capitalInputFunc() {
  // Declare variables
  let td; let i; let
    txtValue;
  const capitalInput = document.getElementById('myCapital');
  const filter = capitalInput.value.toUpperCase();
  const table = document.getElementById('myTable');
  const tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i += 1) {
    td = tr[i].getElementsByTagName('td')[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

document.querySelector('#myCapital').addEventListener('input', () => capitalInputFunc());

function currencyInputFunc() {
  // Declare variables
  let td; let i; let
    txtValue;
  const currencyInput = document.getElementById('myCurrency');
  const filter = currencyInput.value.toUpperCase();
  const table = document.getElementById('myTable');
  const tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i += 1) {
    td = tr[i].getElementsByTagName('td')[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

document.querySelector('#myCurrency').addEventListener('input', () => currencyInputFunc());

function languageInputFunc() {
  // Declare variables
  let td; let i; let
    txtValue;
  const languageInput = document.getElementById('myLanguage');
  const filter = languageInput.value.toUpperCase();
  const table = document.getElementById('myTable');
  const tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i += 1) {
    td = tr[i].getElementsByTagName('td')[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

document.querySelector('#myLanguage').addEventListener('input', () => languageInputFunc());

// document.querySelector('button').addEventListener('click', loadMoreFunc);
