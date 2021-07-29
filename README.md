# protocol_buffers
Simple protocol buffers application with golang, java and python


# Install protoc according to your OS

https://github.com/protocolbuffers/protobuf/releases


# Protocol Buffers Java example
--------------------------------

### Generate code from proto file
cd java_playground
protoc --proto_path=../ --java_out=. ../employees.proto 


 ### Run example with json

java main.java

it will generate serialized jsondata.json file in current directory

 ### Run example with Protocol Buffers

java main2.java

it will generate serialized employeesbinary file in current directory

### Compare serialized file size

jsondata.json   = 124B
employeesbinary = 52B 

employeesbinary size is less the half of jsondata.json size



# Protocol Buffers Javascript example
--------------------------------

### Generate code from proto file
cd js_playground

npm install

protoc --proto_path=../ --js_out=import_style=commonjs,binary:. ../employees.proto 

 ### Run example with json


npm main.js

it will generate serialized jsondata.json file in current directory

 ### Run example with Protocol Buffers

npm main2.js

it will generate serialized employeesbinary file in current directory

### Compare serialized file size

jsondata.json   = 124B
employeesbinary = 52B 

employeesbinary size is less the half of jsondata.json size








Command to generate class 
------------------------


protoc --java_out=./ ./employees.proto 

protoc --python_out=./ ./employees.proto 

protoc --js_out=import_style=commomjs,binary:./ ./employees.proto 

protoc --go_out=./ ./employees.proto 


protoc --proto_path=../ --js_out=import_style=commonjs,binary:build/gen ../employees.proto 


protoc --proto_path=../ --java_out=. ../employees.proto 
