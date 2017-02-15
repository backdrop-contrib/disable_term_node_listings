(function ($) {

Backdrop.behaviors.disableTermNodeListings = {
  // Provide the vertical tab summaries.
  attach: function (context) {
    var $context = $(context);

    // Status. List Disabled, or menu parent.
    $context.find('#edit-disable-term-node-listings').backdropSetSummary(function(context) {
      var text = Backdrop.checkPlain($(context).find('input[name="disable_term_node_listings[status]"]:checked').next('label').text());
      return text;
    });
  }
};

})(jQuery);
