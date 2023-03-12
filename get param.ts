@Get('/:tag/posts')
getPostsForHashTag(@Param() Param ) : string{
return `param is ${Param.tag}`
}
