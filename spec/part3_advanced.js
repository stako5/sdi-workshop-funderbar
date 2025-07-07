(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';

  describe('Part III --- ADVANCED', function() {
    //


    //There is no connecting function in funderbar.js. This is just to test your knowledge of objects. 
    //You will are given an object that will be used to access the data needed for the test to pass. 
    describe('TEST ONLY: Object Values', function() {
      let obj = {
        firstName : 'Tommy',
        lastName : 'Oliver',
        zord : 'Dragon',
        suit : 'Green',
        age : 16,
        inHighSchool : true
      }
      it('TEST ONLY: Access object values using bracket notation ', function() {
        //Use bracket notation for the FILL_ME_IN portion. 
        expect(obj['firstName']).to.eql('Tommy');
        expect(obj['lastName']).to.eql('Oliver');
        expect(obj['age']).to.eql(16);
      });

      it('TEST ONLY: Access object values using dot notation ', function() {
        //Use bracket notation for the FILL_ME_IN portion. 
        expect(obj.zord).to.eql('Dragon');
        expect(obj.suit).to.eql('Green');
        expect(obj.inHighSchool).to.eql(true);
      });

    });
    
    //Build the function in funderbar.js
    describe('Object Creation using Bracket Notation', function() {
      let firstName = 'Tommy';
      let lastName = 'Oliver';
      let zord = 'Dragon';
      let obj = _.objectCreationBracket(firstName,lastName,zord);
      it('Create an object using bracket notation', function() {
        //Use bracket notation for the FILL_ME_IN portion. 
        expect(obj['firstName']).to.eql('Tommy');
        expect(obj['lastName']).to.eql('Oliver');
        expect(obj['zord']).to.eql('Dragon');
      });

    });
    
    //Build the function in funderbar.js
    describe('Object Creation using Dot Notation', function() {
      let firstName = 'Tommy';
      let lastName = 'Oliver';
      let zord = 'Dragon';
      let obj = _.objectCreationDot(firstName,lastName,zord);
      it('Create an object using dot notation', function() {
        //Use dot notation for the FILL_ME_IN portion. 
        expect(obj.firstName).to.eql('Tommy');
        expect(obj.lastName).to.eql('Oliver');
        expect(obj.zord).to.eql('Dragon');
      });

    });

    //Below you will be given an array containing objects. You will need to dig down into the array to access the object and then if necessary use either . notation or [] notation you need to access the proper value. 
    describe('TEST ONLY: Array Of Objects', function(){
      let rangers = [
        {firstName : 'Tommy',
        lastName : 'Oliver',
        suit : 'Green'},
        {firstName : 'Jason',
        lastName : 'Lee',
        suit : 'Red'},
        {firstName : 'Trini',
        lastName : 'Kwan',
        suit : 'Yellow'},
        {firstName : 'Billy',
        lastName : 'Cranston',
        suit : 'Blue'},
        {firstName : 'Zack',
        lastName : 'Taylor',
        suit : 'Black'},
        {firstName : 'Kimberly',
        lastName : 'Ann Hart',
        suit : 'Pink'},
      ]
      it('TEST ONLY: Access the value needed to pass the test', function(){
        expect(rangers[3].firstName.lastName.suit).to.eql({firstName : 'Billy',lastName : 'Cranston', suit : 'Blue'});
        expect(rangers[4]).to.eql('Zack', 'Taylor', 'Black');
        expect(rangers[0].firstName).to.eql('Tommy');
        expect(FILL_ME_IN).to.eql('Black');
        expect(rangers[2].lastName).to.eql(FILL_ME_IN);
        expect(FILL_ME_IN).to.eql('Red');
        expect(rangers[5].lastName).to.eql(FILL_ME_IN);
        expect(FILL_ME_IN).to.eql('Billy');
      });
    });

    describe('TEST ONLY: Object Of Objects', function(){
      let rangers = {
        green :{firstName : 'Tommy',
          lastName : 'Oliver',
          zord : 'Dragon'},
        red :{firstName : 'Jason',
          lastName : 'Lee',
          zord : 'Tyrannosaurus'},
        yellow : {firstName : 'Trini',
          lastName : 'Kwan',
          zord : 'Sabertooth Tiger'},
        blue : {firstName : 'Billy',
          lastName : 'Cranston',
          zord : 'Triceratops'},
        black : {firstName : 'Zack',
          lastName : 'Taylor',
          zord : 'Mastodon'},
        pink : {firstName : 'Kimberly',
          lastName : 'Ann Hart',
          zord : 'Pterodactyl'},
      }
      it('TEST ONLY: Access the value needed to pass the test', function(){
        //Use dot notation
        expect(FILL_ME_IN).to.eql({firstName : 'Zack',
        lastName : 'Taylor',
        zord : 'Mastodon'});
        //Use bracket notation
        expect(FILL_ME_IN).to.eql({firstName : 'Jason',
        lastName : 'Lee',
        zord : 'Tyrannosaurus'});
        //Use dot notation
        expect(FILL_ME_IN).to.eql('Trini');
        expect(FILL_ME_IN).to.eql('Dragon');
        expect(FILL_ME_IN).to.eql('Cranston');
        //Use bracket notation
        expect(FILL_ME_IN).to.eql('Ann Hart');
        expect(FILL_ME_IN).to.eql('Tyrannosaurus');
        expect(FILL_ME_IN).to.eql('Zack');
        //Use a combination of dot and bracket notation to pass each test
        expect(FILL_ME_IN).to.eql('Oliver');
        expect(FILL_ME_IN).to.eql('Sabertooth Tiger');
      });
    });

    //In funderbar.js build a function that has an object and a key then return its value. 
    describe('Access Object Value using Given Key', function(){
      let green = {firstName : 'Tommy',
          lastName : 'Oliver',
          zord : 'Dragon'}
      let red = {firstName : 'Jason',
      lastName : 'Lee',
      zord : 'Tyrannosaurus'}
      it("Should return Object's value using given key", function(){
        expect(_.objectValue(green, 'zord')).to.eql('Dragon');
        expect(_.objectValue(red, 'zord')).to.eql('Tyrannosaurus');
        expect(_.objectValue(green, 'firstName')).to.eql('Tommy');
        expect(_.objectValue(red, 'firstName')).to.eql('Jason');
        expect(_.objectValue(red, 'lastName')).to.eql('Lee');
        expect(_.objectValue(green, 'lastName')).to.eql('Oliver');
      })
    });
    
    //Now we are going to ramp things up a bit using for..in and for...of loops
    //Now is a great time to view the MDN documentation, if you haven't already
    //Google "JavaScript for of loops" or "Javascript for in loops" and select the result that takes you to Mozilla (MDN Docs), and it will help you under stand udin these loops more. 
    //You can also go back and review the Learn Content. 

    //Iterate through a given array using for...of loop
    describe('Looping Arrays using For...Of', function(){
      let arry = [1,'Javascript',2,45,'Array',34,64,true];
      it('Should return the sum of all numbers in an array', function(){
        expect(_.forOf(arry)).to.eql(146);
      });

    });

    //Iterate through an object using for...in loop
    describe('Looping Arrays using For...in', function(){
      let obj = {
        firstName : 'Tommy',
        lastName : 'Oliver',
        zord : 'Dragon',
        suit : 'Green'
        }
      it('Should return an array of keys in obj', function(){
        expect(_.forInKeys(obj)).to.eql(['firstName','lastName','zord','suit']);
      });
    });

    describe('Looping Arrays using For...in returning values', function(){
      let obj = {
        firstName : 'Tommy',
        lastName : 'Oliver',
        zord : 'Dragon',
        suit : 'Green'
        }
      it('Should return an array of keys in obj', function(){
        expect(_.forInValues(obj)).to.eql(['Tommy','Oliver','Dragon','Green']);
      });  

    });
    //END OF PART III
  });

}());
