# Silverstripe Admin Panel

This Silverstripe package will create an Admin Panel at the top of the screen by default, this will give you:

 - A link to the page in the CMS
 - The stage you are currently viewing (Live/Stage)
 - A link to the same page on the alternate stage (Stage/Live)
 - A link to the CMS HomePage
 - A link to the CMS Admin
 - Details about the Page currently being accessed

This panel is only viewable for users logged into the CMS with the following permissions

 - CMS_ACCESS_CMSMain
 - VIEW_DRAFT_CONTENT

## How to add to Page

Place the code below somewhere between the body tags, most likly at the end

```ss
//  template/Page.ss
$AdminPanel
```

## Attributation

The Clipart used was adapted from the following sources

http://openclipart.org/detail/77047/house-line-art-by-gammillian
http://openclipart.org/detail/28802/arrow-by-purzen
