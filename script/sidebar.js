$(document).ready(
        function sidebar() {
                $(function () {
                        $('#slide-submenu').on('click', function () {
                                $(this).closest('.list-group').fadeOut('slide', function () {
                                        $('.mini-submenu').fadeIn();
                                        $('.col-md-10').toggleClass('col-md-10 col-md-11');
                                        $('#podnaslov').attr('style', 'margin-left:0px');

                                });

                        });

                        $('.mini-submenu').on('click', function () {
                                $(this).next('.list-group').toggle('slide');
                                $('.mini-submenu').hide();
                                $('.col-md-11').toggleClass('col-md-11 col-md-10');
                                $('#podnaslov').attr('style', 'margin-left:188px');

                        });
                });
        });