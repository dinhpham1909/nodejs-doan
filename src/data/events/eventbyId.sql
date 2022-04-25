SELECT [id_product]
      ,[name]
      ,[description]
      ,[id_category]
      ,[id_CN]
      ,[rowguid]
  FROM [dbo].[product]
  WHERE [id_product]=@id_product