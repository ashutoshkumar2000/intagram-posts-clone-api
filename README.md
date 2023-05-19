
**Project Installation and Overview**

1\. nest new <project-name>

2\. Commands:	a. cd <project-name> 

b. npm i @nestjs/graphql graphql-tools graphql apollo-server-express

3\.  nest g module <module-name>

4\. nest g resolver <module-name>

5\. Create cluster in mongoDb and then database. Add uri to your project in app.module.ts imports
```
 MongooseModule.forRootAsync({

     useFactory: async () => ({

        uri:  'mongodb+srv://admin:admin@projectdb.xnrohjb.mongodb.net/?   retryWrites=true&w=majority',

})
```

6\. Run the application and go to http://localhost:3000/graphql

7\. Write the resolvers and associated dtos and interfaces:

**Input**: If we are getting input parameters from the user, then we have to define the structure in which the input parameters are coming. This definition is used by GraphQL. eg: 
```
@InputType()

export class PostInput {

@Field()

readonly name: string;

@Field(() => Int)

readonly postNumber: number;

}

```

**ResponseDTO** : Along with the resolvers we are providing the response DTOs as a return type in arrow function. This specifies what will be the shape of the response. eg : 

  ```
  @Query ( () => CreatePostResponseDto)

    async postById (@Args('input') input : PostByIdInput) {

       return this. instaPostService. findById(input);

    }
    @Mutation ( () => CreatePostResponseDto)

    async createPost ( @Args('input') input: PostInput) {

       return this.instaPostService. create(input);

   }
   ```

**Interface** : Use the interface on service and repository level to create abstraction in code.

**Schema** : To bind the mongodb collection using mongoose, we need to specify the shema for that particular collections, by providing it's singular name format along with the schema. (Schema is the shape of the document that resides in the mongodb collection)



