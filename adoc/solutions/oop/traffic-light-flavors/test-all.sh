#!/bin/bash

FILES=*.js

for FILE in $FILES
do
  echo $FILE
  node $FILE
done
