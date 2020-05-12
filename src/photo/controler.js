import Photo from './model';

const photoControler = {
    async get(req,res) {
        try{
            const list = await Photo.find(makeQueryObject (req.query));
            res.send(list);
        } catch (error) {
            res.status(500).send(error);
        }

        function makeQueryObject(query){
            let result={};
            if(query.auth)
            result.$expr={"$eq":[{"$auth":"$author"},]};
        }
    },
    async post (req, res) {
        try {
            const photo = new Photo(req.body);
            await photo.save();
            res.send(photo);

        } catch (error) {
            res.status(500).send(error);
        }
    },
};

export default photoControler;