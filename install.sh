

rm -rf resources
mkdir resources
cd resources
wget http://kyoto.let.vu.nl/~postma/dfn/data_releases.zip
unzip data_releases.zip
cd .. 

rm -rf data 
mkdir data 

# copy annotations
mkdir data/sport
cp -r resources/data_releases/sport/annotations data/sport

mkdir data/other
cp -r resources/data_releases/other/annotations data/other

mkdir data/test
cp -r resources/data_releases/test/annotations data/test

# copy images
rm -rf public/sport
mkdir public/sport
cp resources/data_releases/sport/images/*svg public/sport

rm -rf public/other
mkdir public/other
cp resources/data_releases/other/images/*svg public/other

rm -rf public/test
mkdir public/test
cp resources/data_releases/test/images/*svg public/test


