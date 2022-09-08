const mongoose = require('mongoose');
const {Year} = require('../../models/schedule');

exports.yearsList = async (req, res) =>{
    try{
        const yearsList = await Year.find({});

        let years = [];
        
        yearsList.forEach( year =>{
            years.push({year: year.year, id: year.id})
        })

        res.status(200).json(
            {
                success: true,
                message : years
            }
        );
    } catch(e){

        return res.status(500).json(
            {
                success: false,
                message : 'Erreur inconnue, contactez le web master'
            }
        )
    }
}

exports.createYear = async (req,res) =>{
    try{

        let maxYear ;
        const yearsList = await Year.find({});

        if(yearsList.length == 0){
            maxYear = 2022;
        }

        else{
            maxYear = yearsList[yearsList.length -1].year +1
        }

        const year = new Year({year: maxYear})

        await year.save()
                .then(()=>{
                    return res.status(201).json({
                        success: true,
                        message: "Année créée avec succès"
                    });
                }
            )


    } catch(e){
        console.log(e)

        return res.status(500).json(
            {
                success: false,
                message : 'Erreur lors de la création, contactez le web master'
            }
        )
    }
}

exports.updateShow = async (req, res) =>{
}

exports.deleteYear = async (req, res) =>{

    try{

        await Year.deleteMany()
        .then(()=>{
            return res.status(201).json({
                success: true,
                message: "Années supprimées avec succès"
            });
        })
    }catch(e){
        console.log(e)

        return res.status(500).json(
            {
                success: false,
                message : 'Erreur lors de la suppression des années, contactez le web master'
            }
        )
    }
}