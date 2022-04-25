INSERT INTO [dbo].[product]
    (
        [id_product],
        [name],
        [description],
        [id_category],
        [id_CN]
    )
VALUES
    (
        @id_product,
        @name,
        @description,
        @id_category,
        @id_CN
)
