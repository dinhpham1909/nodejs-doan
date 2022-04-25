UPDATE [dbo].[product]
SET [id_product]=@id_product,
        [name]=@name,
        [description]=@description,
        [id_category]=@id_category,
        [id_CN]=@id_CN
WHERE [id_product]=@id_product

SELECT [id_product]
      ,[name]
      ,[description]
      ,[id_category]
      ,[id_CN]
  FROM [dbo].[product]
  WHERE [id_product]=@id_product