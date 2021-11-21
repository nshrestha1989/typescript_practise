import { User } from "./User";
import { Company} from "./Company";
import { CustomeMap } from "./CustomMap";

const user= new User();
const company= new Company();
const customeMap = new CustomeMap('map');

customeMap.addMarker(user);
customeMap.addMarker(company);

