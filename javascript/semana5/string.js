function stringSplit() {
    const fullname = "Rai Calderon Cardenas";
    const array_fullname = fullname.split(" ");
    console.log(array_fullname);
}

function stringReplace() {
	const fullname = "Rai Calderon Cardenas";
	const fullname_replaced = fullname.replace("i", "Y");
	const fullname_replaced_all = fullname.replaceAll("i", "Y");
	console.log(fullname);
	console.log(fullname_replaced);
	console.log(fullname_replaced_all);
}

function stringLength() {
	const fullname = "Rai Calderon Cardenas";
	const fullname_length = fullname.length;
	console.log(fullname);
	console.log(fullname_length);
	const fullname_no_white_spaces = fullname.replaceAll(" ", "");
	const fullname_no_white_spaces_length = fullname_no_white_spaces.length;
	console.log(fullname_no_white_spaces);
	console.log(fullname_no_white_spaces_length);
}

function stringSlice_vs_Subtring() {
	const fullname = "Rai Calderon Cardenas";
	const fullname_sliced = fullname.slice(4, 12);
	console.log(fullname_sliced);

	const fullname_substring = fullname.substring(4, 12);
	console.log(fullname_substring);
}