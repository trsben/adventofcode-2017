import should from 'should';

var captcha;

if (process.env.KEY) {
	captcha = require('../env/' + process.env.KEY.toLowerCase() + '/day-1.js');
}
else {
	throw "An environment was not provided";
}

describe('INVERSE CAPTCHA', function() {
	describe('When passed a captcha of 1122', function() {
		it('should return an answer of 3', function() {
			const value = captcha('1122');

			value.should.equal(3);
		});
	});

	describe('When passed a captcha of 1111', function() {
		it('should return an answer of 4', function() {
			const value = captcha('1111');

			value.should.equal(4);
		});
	});

	describe('When passed a captcha of 1234', function() {
		it('should return an answer of 0', function() {
			const value = captcha('1234');

			value.should.equal(0);
		});
	});

	describe('When passed a captcha of 91212129', function() {
		it('should return an answer of 9', function() {
			const value = captcha('91212129');

			value.should.equal(9);
		});
	});

	describe('When passed a captcha of 5994521226795838486188872189952551475352929145357284983463678944777228139398117649129843853837124228353689551178129353548331779783742915361343229141538334688254819714813664439268791978215553677772838853328835345484711229767477729948473391228776486456686265114875686536926498634495695692252159373971631543594656954494117149294648876661157534851938933954787612146436571183144494679952452325989212481219139686138139314915852774628718443532415524776642877131763359413822986619312862889689472397776968662148753187767793762654133429349515324333877787925465541588584988827136676376128887819161672467142579261995482731878979284573246533688835226352691122169847832943513758924194232345988726741789247379184319782387757613138742817826316376233443521857881678228694863681971445442663251423184177628977899963919997529468354953548612966699526718649132789922584524556697715133163376463256225181833257692821331665532681288216949451276844419154245423434141834913951854551253339785533395949815115622811565999252555234944554473912359674379862182425695187593452363724591541992766651311175217218144998691121856882973825162368564156726989939993412963536831593196997676992942673571336164535927371229823236937293782396318237879715612956317715187757397815346635454412183198642637577528632393813964514681344162814122588795865169788121655353319233798811796765852443424783552419541481132132344487835757888468196543736833342945718867855493422435511348343711311624399744482832385998592864795271972577548584967433917322296752992127719964453376414665576196829945664941856493768794911984537445227285657716317974649417586528395488789946689914972732288276665356179889783557481819454699354317555417691494844812852232551189751386484638428296871436139489616192954267794441256929783839652519285835238736142997245189363849356454645663151314124885661919451447628964996797247781196891787171648169427894282768776275689124191811751135567692313571663637214298625367655969575699851121381872872875774999172839521617845847358966264291175387374464425566514426499166813392768677233356646752273398541814142523651415521363267414564886379863699323887278761615927993953372779567675', function() {
		it('should return an answer of 9', function() {
			const value = captcha(5994521226795838486188872189952551475352929145357284983463678944777228139398117649129843853837124228353689551178129353548331779783742915361343229141538334688254819714813664439268791978215553677772838853328835345484711229767477729948473391228776486456686265114875686536926498634495695692252159373971631543594656954494117149294648876661157534851938933954787612146436571183144494679952452325989212481219139686138139314915852774628718443532415524776642877131763359413822986619312862889689472397776968662148753187767793762654133429349515324333877787925465541588584988827136676376128887819161672467142579261995482731878979284573246533688835226352691122169847832943513758924194232345988726741789247379184319782387757613138742817826316376233443521857881678228694863681971445442663251423184177628977899963919997529468354953548612966699526718649132789922584524556697715133163376463256225181833257692821331665532681288216949451276844419154245423434141834913951854551253339785533395949815115622811565999252555234944554473912359674379862182425695187593452363724591541992766651311175217218144998691121856882973825162368564156726989939993412963536831593196997676992942673571336164535927371229823236937293782396318237879715612956317715187757397815346635454412183198642637577528632393813964514681344162814122588795865169788121655353319233798811796765852443424783552419541481132132344487835757888468196543736833342945718867855493422435511348343711311624399744482832385998592864795271972577548584967433917322296752992127719964453376414665576196829945664941856493768794911984537445227285657716317974649417586528395488789946689914972732288276665356179889783557481819454699354317555417691494844812852232551189751386484638428296871436139489616192954267794441256929783839652519285835238736142997245189363849356454645663151314124885661919451447628964996797247781196891787171648169427894282768776275689124191811751135567692313571663637214298625367655969575699851121381872872875774999172839521617845847358966264291175387374464425566514426499166813392768677233356646752273398541814142523651415521363267414564886379863699323887278761615927993953372779567675);

			value.should.equal(9);
		});
	});

	describe('When passed captcha given to martin of 5672987533353956199629683941564528646262567117433461547747793928322958646779832484689174151918261551689221756165598898428736782194511627829355718493723961323272136452517987471351381881946883528248611611258656199812998632682668749683588515362946994415852337196718476219162124978836537348924591957188827929753417884942133844664636969742547717228255739959316351852731598292529837885992781815131876183578461135791315287135243541659853734343376618419952776165544829717676988897684141328138348382882699672957866146524759879236555935723655326743713542931693477824289283542468639522271643257212833248165391957686226311246517978319253977276663825479144321155712866946255992634876158822855382331452649953283788863248192338245943966269197421474555779135168637263279579842885347152287275679811576594376535226167894981226866222987522415785244875882556414956724976341627123557214837873872723618395529735349273241686548287549763993653379539445435319698825465289817663294436458194867278623978745981799283789237555242728291337538498616929817268211698649236646127899982839523784837752863458819965485149812959121884771849954723259365778151788719941888128618552455879369919511319735525621198185634342538848462461833332917986297445388515717463168515123732455576143447454835849565757773325367469763383757677938748319968971312267871619951657267913817242485559771582167295794259441256284168356292785568858527184122231262465193612127961685513913835274823892596923786613299747347259254823531262185328274367529265868856512185135329652635938373266759964119863494798222245536758792389789818646655287856173534479551364115976811459677123592747375296313667253413698823655218254168196162883437389718167743871216373164865426458794239496224858971694877159591215772938396827435289734165853975267521291574436567193473814247981877735223376964125359992555885137816647382139596646856417424617847981855532914872251686719394341764324395254556782277426326331441981737557262581762412544849689472281645835957667217384334435391572985228286537574388834835693416821419655967456137395465649249256572866516984318344482684936625486311718525523265165', function() {
		it('should return an answer of 1136 which has been verified as being correct', function() {
			const value = captcha('5672987533353956199629683941564528646262567117433461547747793928322958646779832484689174151918261551689221756165598898428736782194511627829355718493723961323272136452517987471351381881946883528248611611258656199812998632682668749683588515362946994415852337196718476219162124978836537348924591957188827929753417884942133844664636969742547717228255739959316351852731598292529837885992781815131876183578461135791315287135243541659853734343376618419952776165544829717676988897684141328138348382882699672957866146524759879236555935723655326743713542931693477824289283542468639522271643257212833248165391957686226311246517978319253977276663825479144321155712866946255992634876158822855382331452649953283788863248192338245943966269197421474555779135168637263279579842885347152287275679811576594376535226167894981226866222987522415785244875882556414956724976341627123557214837873872723618395529735349273241686548287549763993653379539445435319698825465289817663294436458194867278623978745981799283789237555242728291337538498616929817268211698649236646127899982839523784837752863458819965485149812959121884771849954723259365778151788719941888128618552455879369919511319735525621198185634342538848462461833332917986297445388515717463168515123732455576143447454835849565757773325367469763383757677938748319968971312267871619951657267913817242485559771582167295794259441256284168356292785568858527184122231262465193612127961685513913835274823892596923786613299747347259254823531262185328274367529265868856512185135329652635938373266759964119863494798222245536758792389789818646655287856173534479551364115976811459677123592747375296313667253413698823655218254168196162883437389718167743871216373164865426458794239496224858971694877159591215772938396827435289734165853975267521291574436567193473814247981877735223376964125359992555885137816647382139596646856417424617847981855532914872251686719394341764324395254556782277426326331441981737557262581762412544849689472281645835957667217384334435391572985228286537574388834835693416821419655967456137395465649249256572866516984318344482684936625486311718525523265165');

			value.should.equal(1136);
		});
	});




});
