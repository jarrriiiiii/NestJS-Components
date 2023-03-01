const movie = await this.movieService.getOne(movie_id);
if(!movie){
  throw new Error(
    JSON.stringify({
      message:'some message',
      status:'http status'
   })
  );
}
const rating = await this.ratingRepository.find({where:{movie});
return rating;