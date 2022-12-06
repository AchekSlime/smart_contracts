pragma solidity ^0.4.21;

contract InfoContract {

   string name;
   uint age;

    event Person(
       string name,
       uint age
    );

   function setInfo(string _name, uint _age) public {
       name = _name;
       age = _age;
       emit Person(_name, _age);
   }

   function getInfo() public constant returns (string, uint) {
       return (name, age);
   }
}