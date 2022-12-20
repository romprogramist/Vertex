#!/bin/bash

cd /Users/zolotoy/Documents/Vertex/Vertex/bin/Release/net6.0/publish || exit
zip -r dental-materials.zip ./
scp dental-materials.zip roman@95.163.236.186:~
rm dental-materials.zip