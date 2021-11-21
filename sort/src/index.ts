import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection= new NumberCollection([10, 3, -5, -5])
numberCollection.sort();
console.log(numberCollection.data)

const charactersCollection= new CharactersCollection('Niranjan');
charactersCollection.sort();
console.log(charactersCollection.data)


const linkedeList= new LinkedList();
linkedeList.add(500);
linkedeList.add(-10);
linkedeList.add(3);
linkedeList.add(4);

linkedeList.sort();
linkedeList.print();
