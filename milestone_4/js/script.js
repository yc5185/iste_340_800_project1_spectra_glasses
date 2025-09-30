document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);

  var sidenavElems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavElems);
});


