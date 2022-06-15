from django.urls import path

# locale imports
from .views import (
    ListCreateWorkModelAPIView,
    RetrieveUpdateDestroyWorkModelAPIView,
    ListCreateMaterialModelAPIView,
    RetrieveUpdateDestroyMaterialModelAPIView,
    ListCreateWorksMaterialsModelAPIView,
    RetrieveUpdateDestroyWorksMaterialsModelAPIView,
)


urlpatterns = [
    path(
        "work/",
        ListCreateWorkModelAPIView.as_view(),
        name="get_post_work",
    ),
    path(
        "work/<int:pk>/",
        RetrieveUpdateDestroyWorkModelAPIView.as_view(),
        name="get_delete_update_work",
    ),
    path(
        "material/",
        ListCreateMaterialModelAPIView.as_view(),
        name="get_post_material",
    ),
    path(
        "material/<int:pk>/",
        RetrieveUpdateDestroyMaterialModelAPIView.as_view(),
        name="get_delete_update_material",
    ),
    path(
        "works-materials/",
        ListCreateWorksMaterialsModelAPIView.as_view(),
        name="get_post_worksmaterials",
    ),
    path(
        "works-materials/<int:pk>/",
        RetrieveUpdateDestroyWorksMaterialsModelAPIView.as_view(),
        name="get_delete_update_worksmaterials",
    ),
]
