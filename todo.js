let taskList =  $('#tasks')
let completedItems = $('#completedItems')

$('#addbtn').click(function(){
  let title = $('#userInput').val();
  let liItem = $("<li>")
  let checkbox = $('<input>').attr("type","checkbox").addClass("check")
  let delBtn = $("<button>").html('Delete')

  $(liItem).append(checkbox,title, delBtn)

  $(taskList).append(liItem)
  $('#userInput').val("")

  delBtn.click(function() {
    $(this).parent().remove()

})

  checkbox.change(function () {
    if($(this).is(":checked")) {
      let li = $(this).parent()
      completedItems.append(li)
  } else {
      let li = $(this).parent()
      taskList.append(li)
  }


})

$(function() {
  $('.sortable').sortable();

  $('.sortable').disableSelection();
});
})
