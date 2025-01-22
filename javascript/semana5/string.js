function stringSplit() {
  // const fullname = prompt("Nombre y Apellido: ");
  const fullname = "bruno diaz";
  const array_fullname = fullname.split(" ");
  console.log(array_fullname);
}

function stringReplace() {
  const fullname = "rai antonio calderon cardenas";
  const fullname_replaced = fullname.replace("i", "Y");
  const fullname_replaced_all = fullname.replaceAll("i", "Y");
  console.log(fullname);
  console.log(fullname_replaced);
  console.log(fullname_replaced_all);
}

function stringLength() {
  const fullname = "rai antonio calderon cardenas";
  const fullname_length = fullname.length;
  console.log(fullname);
  console.log(fullname_length);
  const fullname_no_white_spaces = fullname.replaceAll(" ", "");
  console.log(fullname_no_white_spaces);
  const fullname_no_white_spaces_length = fullname_no_white_spaces.length;
  console.log(fullname_no_white_spaces_length);
}

function stringSlice_vs_substring() {
  const fullname = "rai antonio calderon cardenas";
  const fullname_sliced = fullname.slice(0, 4);
  console.log(fullname_sliced);
// aparentemente hacen lo mismo pero substring es mas usado y puede usar indice negativo para empezar desde derecha
  const fullname_substring = fullname.substring(0, 4);
  console.log(fullname_substring);
}

