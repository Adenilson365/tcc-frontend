
export function formateDate(dataIso) {
  console.log(dataIso);
    const data = new Date(dataIso);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  }
  
  /*
  Formata a data que vem do banco de dados Postegres : '2024-10-19T18:29:56.739Z'
  para o formato brasileiro: '19/10/2024' (dd/mm/yyyy)
  
  */

  

  