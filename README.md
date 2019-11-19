# vfor1Verk17

1.      Búið til HTML, CSS og JavaScript skjöl
2.      Vinnið í HTML skjalinu
2.1     Setjið upp title og tengingu við CSS skjalið

2.2     Setjið upp div með id page
2.2.1   Setjið upp heading 1 með id header. Taggið á að ná utan um strenginn "List"
2.2.2   Setjið upp heading 2 utan um strenginn "Buy groceries"

2.2.3   Setjið upp óraðan lista
2.2.3.1 Setjið upp lista tag með id "one" utan um strenginn "fresh figs" og hafið orðið fresh skáletrað (em eða i taggið)
2.2.3.2 Setjið upp lista tag með id "two" utan um strenginn "pine nuts"
2.2.3.3 Setjið upp lista tag með id "three" utan um strenginn "honey"
2.2.3.4 Setjið upp lista tag með id "four" utan um strenginn "balsamic vinegar"

2.3     Setjið upp tengingu við JavaScript skjalið

3       Vinnið í CSS skjalinu
3.1     importið letrinu Oswald svona: @import url(http://fonts.googleapis.com/css?family=Oswald);

3.2     Hafið áhrif á Body
3.2.1   Setjið bakgrunnslit í #000
3.2.2   Setjið leturtýpur í 'Oswald', 'Futura' og sans-serif
3.2.3   Setjið margin í 0
3.2.4   Setijð padding í 0

3.3     Hafið áhrif á id page
3.3.1   Setjið bakgrunnslit í #403c3b
3.3.2   Setjið margin í topp 0, hægri auto, botn 0 og vinstri auto

3.4     Hafið áhrif á heading 1
3.4.1   Setjið bakgrunnsmynd sem kinglogo.png
3.4.2   Setjið background-repeat í no repeat
3.4.3   Setjið background-position í center center
3.4.4   Miðjið textann
3.4.5   Setjið texta inndrátt í mínus 1000%
3.4.6   Setjið hæðina í 75 pixla
3.4.7   Setjið línu hæðina í 75 pixla
3.4.8   Setjið breiddina í 117 pixla
3.4.9   Setjið margin í top 0, hægri auto, botn 0 og vinstri auto
3.4.10  Setjið padding í top 30 pixla, hægri 10 pixla, botn 20 pixla og vinstri 10 pixla

3.5     Hafið áhrif á heading 2
3.5.1   Setjið letur lit í #fff
3.5.2   Setjið letur stærð í 24 pixla
3.5.3   Setijð font-weight í normal
3.5.4   Miðjið allan texta
3.5.5   Setjið allt letur í hástafi
3.5.6   Setjið bil á milli leturs í 0.2em
3.5.7   Setjið margin í top 0, hægri 0, botn 23 pixla og vinstri 0

3.6     Hafið áhrif á ul taggið
3.6.1   Setjið bakgrunnslit í #584f4d
3.6.2   Setjið border í none
3.6.3   Setjið padding í 0
3.6.4   Setjið margin í 0

3.7     Hafið áhrif á li taggið
3.7.1   Setjið bakgrunnslit í #ec8b68
3.7.2   Setjið leturlit í #fff
3.7.3   Setjið border top í 1 pixla breidd, solid týpuna og litinn #fe9772
3.7.4   Setjið border botn í 1 pixla breidd, solid týpuna og litinn #9f593f
3.7.5   Setjið letur stærð í 24 pixla
3.7.6   Setjið breidd á milli leturs í 0.05em
3.7.7   Setjið "list-style-type" í none
3.7.8   Setjið text-shadow í lárétt 2 pixla, lóðrétt 2 pixla, blur radius 1 pixla og litinn #9f593f
3.7.9   Setjið hæðina í 50 pixla
3.7.10  Setjið padding til vinstri í 1 em
3.7.11  Setjið padding topp í 10 pixla

3.8     Hafið áhrif á class hot
3.8.1   Setjið bakgrunnslit í #d7666b
3.8.2   Setjið letur lit í #fff
3.8.3   Setjið text-shadow í lárétt 2 pixla, lóðrétt 2 pixla, blur radius 1 pixla og litinn #914141
3.8.4   Setjið border top í 1 pixla breidd, týpuna solid og litinn #e99295
3.8.5   Setjið border botn í 1 pixla breidd, týpuna solid og litinn #914141

3.9     Hafið áhrif á class cool
3.9.1   Setjið bakgrunnslit í #6cc0ac
3.9.2   Setjið leturlit í #fff
3.9.3   Setjið text-shadow í lárétt 2 pixla, lóðrétt 2 pixla, blur radius 1 pixla og litinn #3b6a5e
3.9.4   Setjið border top í 1 pixla breidd, týpuna solid og litinn #7ee0c9
3.9.5   Setjið border botn í 1 pixla breidd, týpuna solid og litinn #3b6a5e


Hérna fyrir neðan, lesið kóðann og afritið. Það sem er verið að gera er að tryggja að síðan aðlagist skjástærðinni sem
skoðar vefsíðuna.

@media only screen and (max-width: 500px) {
    body {
        background-color: #584f4d;
    }
    #page {
        max-width: 480px;
    }
}
@media only screen and (min-width: 501px) and (max-width: 767px) {
    #page {
        max-width: 480px;
        margin: 20px auto 20px auto;
    }
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
    #page {
        max-width: 480px;
        margin: 20px auto 20px auto;
    }
}

@media only screen and (min-width: 960px) {
    #page {
        max-width: 480px;
        margin: 20px auto 20px auto;
    }
}

4.      Vinnið í JavaScript skjalinu
4.1     Skilgreinið breytuna list og setjið fyrsta ul taggið inní hana
4.2     Skilgreinið breytuna newItemLast og búið til elementið li í hana
4.3     Skilgreinið breytuna newTextLast og búið til textNode fyrir strenginn "cream"
4.4     Setjið breytuna newTextLast inní elementið í breytunni newItemLast með appendChild
4.5     Setjið breytuna newItemLast inní elementið í breytunni list með appendChild

4.6     Skilgreinið breytuna newItemFirst og búið til elementið li í hana
4.7     Skilgreinið breytuna newTextFirst og búið til textNode fyrir strenginn "kale"
4.8     Setjið breytuna newTextFirst inní elementið í breytunni newItemFirst með appendChild
4.9     Setjið innihaldið í newItemFirst fremst í list svona: list.insertBefore(newItemFirst, list.firstChild)

4.10    Skilgreinið breytuna listItems og setjið inní hana öll li element

4.11    Skilgreinið breytuna i
4.12    Búið til for loop sem byrjar að telja í 0, telur meðan i er minna en lengdin á listItems og i hækkar um 1 í hvert skipti sem keyrist
4.12.1  Breytið class nafni á öllum elements í listItems yfir í cool

4.13    Skilgreinið breytuna heading og setjið í hana fyrsta h2 elementið
4.14    Skilgreinið breytuna headingText og náið í textann úr heading og setjið í breytuna
4.15    Skilgreinið totalItems og setjið inn lengdina á listItems arrayinum
4.16    Skilgreinið newHeading og setjið inn headingText + '<span>' + totalItems + '</span>'
4.17    Notið innerHTML til þess að breyta innihaldinu í heading yfir í innihaldið í newHeading.
