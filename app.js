$(document).ready(function () {
    // TO DO
    // START OVER BUTTON SHOWS UP WITH A DELAY
    // START OVER FADES EVERYTHING OUT

    // QUALIFICATIONS TO SCROLL UP WHILE PAGE IS SCROLLING DOWN

    // qual display delay
    let animateVar1 = 1000;
    function fadeMeIn1(className) {
        className.fadeIn(animateVar1);
    }

    // question display delay
    let animateVar2 = 1500;
    function fadeMeIn2(className) {
        className.fadeIn(animateVar2);
    }
    // resetting top/bottom blocks
    function hidequestion() {
        $('.questionWrapper').hide();
    }
    function hidequal() {
        $('.qualWrapper').hide();
    }
    function hideboth() {
        $('.qualWrapper').hide();
        $('.questionWrapper').hide();
    }
    // start screen
    function initialiseQN() {
        hideboth();
        fadeMeIn2($('.start'));
    }
    // scrolling to selected qual
    function scrolltoQual() {
        $('html, body').animate({
            scrollTop: $(".qualWrapper").offset().top - 150
        }, 1000);
    }
    // go to question one
    function backto1() {
        hideboth();
        fadeMeIn2($('.question1'));
    }
    // go to question two
    function backto2() {
        hideboth();
        fadeMeIn2($('.question2'));
    }

    // what would a q2q button function look like?
    // function (pass in the trigger?)
    // $('.questionWrapper').hide();
    // $('." + use trigger here").show();

    //catching the trigger id
    // var e = $(event.target)[0].id;
    // console.log(e);

    // events start here
    // events start here

    initialiseQN();
    // actual start button
    $('#startButton').click(function () {
        backto1();
    });
    // go to q1 from q2
    $('#q2back').click(function () {
        backto1();
    });

    // I have experience
    $('#q1y').click(function () {
        // console.log($(event.target)[0].id);
        hidequestion();
        fadeMeIn2($('.question2'));
    });

    //have exp pick wm
    $('#q2wm').click(function () {
        hidequestion();
        fadeMeIn2($('.question21'));
    });
    // have exp pick fp
    $('#q2fp').click(function () {
        hidequestion();
        fadeMeIn2($('.question22fp'));
    });
    // have exp pick cmcf
    $('#q2cmcf').click(function () {
        hidequestion();
        fadeMeIn2($('.question23cmcf'));
    });
    // have exp pick operations
    $('#q2ops').click(function () {
        hidequestion();
        fadeMeIn2($('.question24ops'));
    });
    // have exp pick compliance and risk
    $('#q2cmprisk').click(function () {
        hidequestion();
        fadeMeIn2($('.question25cmprisk'));
    });
    // have exp pick islamic finance
    $('#q2if').click(function () {
        hidequestion();
        fadeMeIn2($('.question26if'));
    });
    // question 3 I have a little experience
    $('#q1yl').click(function () {
        hidequestion();
        fadeMeIn2($('.question3'));
    });
    //question 4 I have no experience
    $('#q1n').click(function () {
        hidequestion();
        fadeMeIn2($('.question4'));
    });
    // go back to q2 from q21
    $('#q21back').click(function () {
        backto2();
    });
    //picked uk in wm
    $('#q21uk').click(function () {
        hidequestion();
        fadeMeIn2($('.question21uk'));
    });
    // picked not uk in wm
    $('#q21nuk').click(function () {
        hidequestion();
        fadeMeIn2($('.question21nuk'));
    });
    // 2.1 UK IN WEALTH MANAGEMENT
    $('#q21ukOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q21iad'));
        scrolltoQual();
    });
    $('#q21ukOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q21pciam'));
        fadeMeIn1($('.q21cwm'));
        scrolltoQual();
    });
    $('#q21ukOP3').click(function () {
        hidequal();
        fadeMeIn1($('.q21pciam'));
        fadeMeIn1($('.q21cwm'));
        scrolltoQual();
    });
    $('#q21ukOP4').click(function () {
        hidequal();
        fadeMeIn1($('.q21cwm'));
        scrolltoQual();
    });
    $('#q21ukback').click(function () {
        hidequal();
        $('.questionWrapper').hide();
        fadeMeIn2($('.question21'));
    });
    // 2.1 NOT UK IN WEALTH MANAGEMENT
    $('#q21nukOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q21iciwm'));
        fadeMeIn1($('.q21icawm'));
        scrolltoQual();
    });
    $('#q21nukOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q21cwm'));
        scrolltoQual();
    });
    $('#q21nukOP3').click(function () {
        hidequal();
        fadeMeIn1($('.q21cwm'));
        scrolltoQual();
    });
    $('#q21nukback').click(function () {
        hideboth();
        fadeMeIn2($('.question21'));
    });
    // 2.2 FINANCIAL PLANNING
    $('#q22fpOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q22iadfp'));
        fadeMeIn1($('.q22dafp'));
        scrolltoQual();
    });
    $('#q22fpOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q22cp'));
        scrolltoQual();
    });
    $('#q22fpOP3').click(function () {
        hidequal();
        fadeMeIn1($('.q22iadfp'));
        fadeMeIn1($('.q22dafp'));
        scrolltoQual();
    });
    $('#q22fpOP4').click(function () {
        hidequal();
        fadeMeIn1($('.q22ptpa'));
        fadeMeIn1($('.q22dafp'));
        scrolltoQual();
    });
    $('#q22fpOP5').click(function () {
        hidequal();
        fadeMeIn1($('.q22iadfp'));
        scrolltoQual();
    });
    $('#q22fpback').click(function () {
        backto2();
    });
    // 2.3 CAPITAL MARKETS AND CORPORATE FINANCES 
    $('#q23cmcfOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q23cmp'));
        scrolltoQual();
    });
    $('#q23cmcfOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q23dcm'));
        scrolltoQual();
    });
    $('#q23cmcfOP3').click(function () {
        hidequal();
        fadeMeIn1($('.q23ciim'));
        scrolltoQual();
    });
    $('#q23cmcfOP4').click(function () {
        hidequal();
        fadeMeIn1($('.q23ccf'));
        fadeMeIn1($('.q23dcf'));
        scrolltoQual();
    });
    $('#q23cmcfback').click(function () {
        backto2();
    });
    // 2.4 OPERATIONS
    $('#q24opsOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        scrolltoQual();
    });
    $('#q24opsOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q24iocp'));
        fadeMeIn1($('.q24morfi'));
        fadeMeIn1($('.q24dio'));
        scrolltoQual();
    });
    $('#q24opsOP3').click(function () {
        hidequal();
        fadeMeIn1($('.q24agso'));
        fadeMeIn1($('.q24dio'));
        scrolltoQual();
    });
    // 2.4 OPERATIONS BUTTON TO SET B
    $('#q24opsOP4').click(function () {
        hideboth();
        fadeMeIn2($('.question24opsf'));
    });
    // 2.4B OPERATIONS
    $('#q24opsfOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q24bcma'));
        scrolltoQual();
    });
    $('#q24opsfOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q25cfc'));
        fadeMeIn1($('.q25mso'));
        fadeMeIn1($('.q24biio'));
        scrolltoQual();
    });
    $('#q24opsfOP3').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q24bder'));
        scrolltoQual();
    });
    $('#q24opsfOP4').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q25gfc'));
        scrolltoQual();
    });
    $('#q24opsfOP5').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q24bgso'));
        scrolltoQual();
    });
    $('#q24opsfOP6').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q24bor'));
        fadeMeIn1($('.q25rfs'));
        scrolltoQual();
    });
    $('#q24opsfOP7').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        fadeMeIn1($('.q24base'));
        fadeMeIn1($('.q24bpwmsc'));
        scrolltoQual();
    });
    $('#q24opsfback').click(function () {
        hideboth();
        fadeMeIn2($('.question24ops'));
    });
    $('#q24opsback').click(function () {
        backto2();
    });
    // 2.5 COMPLIANCE AND RISK
    $('#q25cmpriskOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q25rfc'));
        fadeMeIn1($('.q25gfc'));
        fadeMeIn1($('.q25cfc'));
        fadeMeIn1($('.q25mso'));
        scrolltoQual();
    });
    $('#q25cmpriskOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q24morfi'));
        fadeMeIn1($('.q25dic'));
        scrolltoQual();
    });
    $('#q25cmpriskback').click(function () {
        backto2();
    });
    // 2.6 ISLAMIC FINANCE
    $('#q26ifOP1').click(function () {
        hidequal();
        fadeMeIn1($('.q26fibf'));
        scrolltoQual();
    });
    $('#q26ifOP2').click(function () {
        hidequal();
        fadeMeIn1($('.q26ifq'));
        scrolltoQual();
    });
    $('#q26ifback').click(function () {
        backto2();
    });
    // I have a little experience
    $('#q3OP1').click(function () {
        hidequal();
        fadeMeIn1($('.q21iad'));
        fadeMeIn1($('.q21iciwm'));
        scrolltoQual();
    });
    $('#q3OP2').click(function () {
        hidequal();
        fadeMeIn1($('.q21iad'));
        scrolltoQual();
    });
    $('#q3OP3').click(function () {
        hidequal();
        fadeMeIn1($('.q23cmp'));
        scrolltoQual();
    });
    $('#q3OP4').click(function () {
        hidequal();
        fadeMeIn1($('.q24ioc'));
        scrolltoQual();
    });
    $('#q3OP5').click(function () {
        hidequal();
        fadeMeIn1($('.q25rfs'));
        scrolltoQual();
    });
    $('#q3OP6').click(function () {
        hidequal();
        fadeMeIn1($('.q26fibf'));
        scrolltoQual();
    });
    $('#q3back').click(function () {
        backto1();
    });
    // I have no experience
    $('#q4OP1').click(function () {
        hidequal();
        fadeMeIn1($('.q4ffs'));
        fadeMeIn1($('.q4iti'));
        scrolltoQual();
    });
    $('#q4OP2').click(function () {
        hidequal();
        fadeMeIn1($('.q4ffs'));
        fadeMeIn1($('.q4iiti'));
        scrolltoQual();
    });
    $('#q4back').click(function () {
        backto1();
    });
});

